import { SkillID } from "@/content/client/attributes/skills";
import { backgrounds } from "@/content/client/setup/background";
import { charClass } from "@/content/client/setup/char-class";
import { SkillAdjust } from "@/content/types";
import { RouteResponse } from "@/utils/api/route-response.server";
import { CharacterSetup, characterSetupTest } from "@/utils/form-types/setup";
import { nextXPFromLvl } from "@/utils/progress/skill-xp";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

declare global {
  interface ObjectConstructor {
    fromEntries<A extends ReadonlyArray<readonly [PropertyKey, any]>>(
      array: A
    ): { [K in A[number][0]]: Extract<A[number], readonly [K, any]>[1] };
  }
}

const BASE_SKILL_LVL = 10;

type SkillIDVals = Record<SkillID, number>;

const BaseStartingSkillLevels: SkillIDVals = {
  TechMelee: BASE_SKILL_LVL,
  TradMelee: BASE_SKILL_LVL,
  Strength: BASE_SKILL_LVL,
  TechRanged: BASE_SKILL_LVL,
  TradRanged: BASE_SKILL_LVL,
  Reflexes: BASE_SKILL_LVL,
  HardwareTech: BASE_SKILL_LVL,
  SoftwareTech: BASE_SKILL_LVL,
  Rhetoric: BASE_SKILL_LVL,
  Charisma: BASE_SKILL_LVL,
  Intimidation: BASE_SKILL_LVL,
  RedMoonHarmony: BASE_SKILL_LVL,
  BlueMoonSynergy: BASE_SKILL_LVL,
  CyberwearIntegration: BASE_SKILL_LVL,
};
type TableSkills =
  | "tech_melee"
  | "trad_melee"
  | "strength"
  | "tech_ranged"
  | "trad_ranged"
  | "reflexes"
  | "hardware_tech"
  | "software_tech"
  | "rhetoric"
  | "charisma"
  | "intimidation"
  | "red_moon_harmony"
  | "blue_moon_synergy"
  | "cyberwear_integration";
type SkillIDTableKey = Record<SkillID, TableSkills>;
const TableSkillMap: SkillIDTableKey = {
  TechMelee: "tech_melee",
  TradMelee: "trad_melee",
  Strength: "strength",
  TechRanged: "tech_ranged",
  TradRanged: "trad_ranged",
  Reflexes: "reflexes",
  HardwareTech: "hardware_tech",
  SoftwareTech: "software_tech",
  Rhetoric: "rhetoric",
  Charisma: "charisma",
  Intimidation: "intimidation",
  RedMoonHarmony: "red_moon_harmony",
  BlueMoonSynergy: "blue_moon_synergy",
  CyberwearIntegration: "cyberwear_integration",
} as const;
const TableSkillXPMap = {
  TechMelee: "xp_tech_melee",
  TradMelee: "xp_trad_melee",
  Strength: "xp_strength",
  TechRanged: "xp_tech_ranged",
  TradRanged: "xp_trad_ranged",
  Reflexes: "xp_reflexes",
  HardwareTech: "xp_hardware_tech",
  SoftwareTech: "xp_software_tech",
  Rhetoric: "xp_rhetoric",
  Charisma: "xp_charisma",
  Intimidation: "xp_intimidation",
  RedMoonHarmony: "xp_red_moon_harmony",
  BlueMoonSynergy: "xp_blue_moon_synergy",
  CyberwearIntegration: "xp_cyberwear_integration",
} as const;
export type TableSkillXP =
  (typeof TableSkillXPMap)[keyof typeof TableSkillXPMap];

type startingLevelsTableKeyed = {
  lvls: Record<TableSkills, number>;
  xp: Record<TableSkillXP, number>;
};

function getStartingSkillLevels(
  skillAdjustments: SkillAdjust[]
): startingLevelsTableKeyed {
  const newSkillLevels = { ...BaseStartingSkillLevels };

  skillAdjustments.forEach((adj) => {
    const newVal = newSkillLevels[adj.skillId] + adj.value;
    newSkillLevels[adj.skillId] = newVal < 1 ? 1 : newVal;
  });

  const typefixedEntries: Array<[any, number]> = Object.entries(newSkillLevels);
  const reKeyedLvls: Record<TableSkills, number> = Object.fromEntries(
    typefixedEntries.map(([k, v]: [SkillID, number]) => {
      return [TableSkillMap[k], v];
    })
  );

  return {
    lvls: reKeyedLvls,
    xp: {
      xp_tech_melee: nextXPFromLvl(newSkillLevels.TechMelee - 1),
      xp_trad_melee: nextXPFromLvl(newSkillLevels.TradMelee - 1),
      xp_strength: nextXPFromLvl(newSkillLevels.Strength - 1),
      xp_tech_ranged: nextXPFromLvl(newSkillLevels.TechRanged - 1),
      xp_trad_ranged: nextXPFromLvl(newSkillLevels.TradRanged - 1),
      xp_reflexes: nextXPFromLvl(newSkillLevels.Reflexes - 1),
      xp_hardware_tech: nextXPFromLvl(newSkillLevels.HardwareTech - 1),
      xp_software_tech: nextXPFromLvl(newSkillLevels.SoftwareTech - 1),
      xp_rhetoric: nextXPFromLvl(newSkillLevels.Rhetoric - 1),
      xp_charisma: nextXPFromLvl(newSkillLevels.Charisma - 1),
      xp_intimidation: nextXPFromLvl(newSkillLevels.Intimidation - 1),
      xp_red_moon_harmony: nextXPFromLvl(newSkillLevels.RedMoonHarmony - 1),
      xp_blue_moon_synergy: nextXPFromLvl(newSkillLevels.BlueMoonSynergy - 1),
      xp_cyberwear_integration: nextXPFromLvl(
        newSkillLevels.CyberwearIntegration - 1
      ),
    },
  };
}

export async function POST(request: Request) {
  const supabase = createClient(cookies());

  const [newUser, user] = await Promise.all([
    request.json(),
    supabase.auth.getUser(),
  ]);

  if (characterSetupTest(newUser)) {
    const validatedData = newUser as CharacterSetup;

    const SkillAdjusts: SkillAdjust[] = [
      ...backgrounds[validatedData.background].bonuses,
      ...charClass[validatedData.charClass].bonuses,
    ];

    const { lvls, xp } = getStartingSkillLevels(SkillAdjusts);

    const [charClassResp, locationResp, skillsResp] = await Promise.all([
      supabase
        .from("class")
        .upsert({
          class: validatedData.charClass,
        })
        .eq("user_id", user.data.user?.id)
        .select(),
      supabase
        .from("location")
        .upsert({
          location: validatedData.startArea,
        })
        .eq("user_id", user.data.user?.id)
        .select(),
      supabase
        .from("skills")
        .upsert({
          ...lvls,
          ...xp,
        })
        .eq("user_id", user.data.user?.id)
        .select(),
    ]);

    if (!charClassResp.error && !locationResp.error && !skillsResp.error) {
      const { data, error } = await supabase
        .from("account-data")
        .upsert({
          avatar_name: validatedData.avatar_name,
          faction: validatedData.faction,
          background: validatedData.background,
        })
        .eq("user_id", user.data.user?.id)
        .select();

      return RouteResponse({ data, error });
    }

    return RouteResponse({
      data: null,
      error: charClassResp.error || locationResp.error || skillsResp.error,
    });
  } else {
    return new Response("Form content incorrect", {
      status: 422,
    });
  }
}
