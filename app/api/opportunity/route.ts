import { Currency, currencies } from "@/content/client/currency";
import { RouteResponse } from "@/utils/api/route-response.server";
import { indexOfMax } from "@/utils/array";
import { OpportunityForm } from "@/utils/form-types/opportunity";
import { createClient } from "@/utils/supabase/server";
import { OpportunityTable } from "@/utils/table-types/opportunityTable.server";
import { SkillsTable, TableSkills } from "@/utils/table-types/skills";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const supabase = createClient(cookies());

  const [body, user] = await Promise.all([
    request.json(),
    supabase.auth.getUser(),
  ]);
  const opportunityArgs = body as OpportunityForm;

  // TODO check opportunity unlocked
  const isUnlocked = true;

  if (isUnlocked) {
    const messageMap: string[] = [];

    const [opportunityDataSB, playerSkillsSB] = await Promise.all([
      supabase
        .schema("content")
        .from("opportunities")
        .select("*")
        .eq("id", opportunityArgs.id)
        .single(),
      supabase
        .schema("userdata")
        .from("skills")
        .select()
        .eq("user_id", user.data.user?.id)
        .single(),
    ]);

    const opportunityData = opportunityDataSB.data as OpportunityTable;
    const playerSkills = playerSkillsSB.data as Record<SkillsTable, number>;

    // combat interaction should be decide by equipment
    // conversation selected by choice
    // tech choices situational

    // TODO select required skills
    const TEMP_selectedSkillKey: TableSkills[] = [
      "tech_melee",
      "trad_melee",
      "tech_ranged",
      "trad_ranged",
      "red_moon_harmony",
      "blue_moon_synergy",
    ];
    const TEMP_selectedSkill = [
      playerSkills.tech_melee,
      playerSkills.trad_melee,
      playerSkills.tech_ranged,
      playerSkills.trad_ranged,
      playerSkills.red_moon_harmony,
      playerSkills.blue_moon_synergy,
    ];
    const TEMP_biggestSkillIndex = indexOfMax(TEMP_selectedSkill);
    const TEMP_biggestSkillValue = TEMP_selectedSkill[TEMP_biggestSkillIndex];
    const TEMP_biggestSkillVKey = TEMP_selectedSkillKey[TEMP_biggestSkillIndex];

    const RanRoll =
      Math.ceil(
        Math.random() * 50 + Math.random() * 50 + (Math.random() * 50) / 3
      ) - 75;

    // check completion (+ flavour text)
    const isSuccessful =
      TEMP_biggestSkillValue > RanRoll + opportunityData.difficulty_value;

    messageMap.push(isSuccessful ? "you won" : "you failed");

    // roll for loot (+ flavour text)
    if (isSuccessful) {
      const skillXPMap: Record<TableSkills, number> = {
        tech_melee: 0,
        trad_melee: 0,
        tech_ranged: 0,
        trad_ranged: 0,
        red_moon_harmony: 0,
        blue_moon_synergy: 0,
        strength: 0,
        reflexes: 0,
        hardware_tech: 0,
        software_tech: 0,
        rhetoric: 0,
        charisma: 0,
        intimidation: 0,
        cyberwear_integration: 0,
      };
      const currencyMap: Partial<Record<Currency, number>> = {};

      if (opportunityData.currency_1_show) {
        const currencyDiff =
          opportunityData.currency_1_drop_max -
          opportunityData.currency_1_drop_min;
        const rewardVal = Math.ceil(
          opportunityData.currency_1_drop_min + Math.random() * currencyDiff
        );

        currencyMap[opportunityData.currency_1_key] = rewardVal;
        messageMap.push(
          `You gained ${rewardVal} ${
            currencies[opportunityData.currency_1_key]
          }s`
        );
      }
      if (opportunityData.currency_2_show) {
        const currencyDiff =
          opportunityData.currency_2_drop_max -
          opportunityData.currency_2_drop_min;
        const rewardVal = Math.ceil(
          opportunityData.currency_2_drop_min + Math.random() * currencyDiff
        );

        currencyMap[opportunityData.currency_2_key] = rewardVal;
        messageMap.push(
          `You gained ${rewardVal} ${
            currencies[opportunityData.currency_2_key]
          }s`
        );
      }

      console.log("currencyMap", currencyMap);

      // check for tech rolls for bonus loot

      skillXPMap[TEMP_biggestSkillVKey] = opportunityData.xp_gain;

      // update player values, xp gain (+ flavour text)
      const [updCurrencyResp, updSkillsResp] = await Promise.all([
        supabase.schema("userdata").rpc("currency", {
          red: currencyMap.RED_CHIT || 0,
          black: currencyMap.BLACK_MARK || 0,
          row_id: user.data.user?.id,
        }),
        supabase.schema("userdata").rpc("skills_update", {
          ...skillXPMap,
          row_id: user.data.user?.id,
        }),
      ]);

      
    return RouteResponse({
      data: messageMap,
      error: updCurrencyResp.error || updSkillsResp.error,
    });
    }

    return RouteResponse({
      data: messageMap,
      error: null,
    });
  } else {
    return RouteResponse({
      data: null,
      error: {
        message: "opportunity not unlocked",
      },
    });
  }
}
