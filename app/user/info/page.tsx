import CardSection from "@/components/card/CardSection";
import { CardSM } from "@/components/card/card-sm";
import { SkillID, skills } from "@/content/client/attributes/skills";
import { Currency } from "@/content/client/currency";
import { XP_GRAPH, nextXPFromLvl } from "@/utils/progress/skill-xp";
import { createClient } from "@/utils/supabase/server";
import { SkillsTable } from "@/utils/table-types/skills";
import { PostgrestError } from "@supabase/supabase-js";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";

type UserData = {
  name: string;
  faction: string;
  charClass: string;
  background: string;
  skills: Record<SkillsTable, number>;
  currency: Record<Currency, number>;
};
type Response = {
  data: UserData;
  error: PostgrestError | null;
};

async function getUserData({
  cookieData,
}: {
  cookieData: ReadonlyRequestCookies;
}): Promise<Response> {
  const supabase = createClient(cookieData);

  const user = await supabase.auth.getUser();

  const [userData, location, charClass, skills, currency] = await Promise.all([
    await supabase
      .from("account-data")
      .select(`avatar_name, faction, background`)
      .eq("user_id", user.data.user?.id)
      .limit(1)
      .single(),
    await supabase
      .from("location")
      .select(`location`)
      .eq("user_id", user.data.user?.id)
      .limit(1)
      .single(),
    await supabase
      .from("class")
      .select(`class`)
      .eq("user_id", user.data.user?.id)
      .limit(1)
      .single(),
    await supabase
      .from("skills")
      .select(`*`)
      .eq("user_id", user.data.user?.id)
      .limit(1)
      .single(),
    await supabase
      .from("currency")
      .select(`*`)
      .eq("user_id", user.data.user?.id)
      .limit(1)
      .single(),
  ]);

  return {
    data: {
      name: userData.data?.avatar_name,
      faction: userData.data?.faction,
      background: userData.data?.background,
      charClass: charClass.data?.class,
      skills: skills.data,
      currency: currency.data,
    },
    error:
      userData.error ||
      location.error ||
      charClass.error ||
      skills.error ||
      currency.error,
  };
}

function Skill({
  skillID,
  skillXP,
  skillLvl,
}: {
  skillID: SkillID;
  skillXP: number;
  skillLvl: number;
}) {
  const SkillData = skills[skillID];

  const vals = {
    last: nextXPFromLvl(skillLvl - 1),
    next: nextXPFromLvl(skillLvl),
    required: nextXPFromLvl(skillLvl) - nextXPFromLvl(skillLvl - 1),
  };
  const percentFromNext = ((skillXP - vals.last) / vals.required) * 100;

  return SkillData ? (
    <li>
      <CardSM>
        <h5 className="">
          {SkillData.label} :: Lvl{" "}
          <span className="font-bold text-lg">{skillLvl}</span> / 200
        </h5>
        <div className="flex justify-between min-w-[24rem] text-xs text-slate-700">
          <span>{nextXPFromLvl(skillLvl - 1)}</span>
          <span className="text-slate-900 text-sm">{skillXP}</span>
          <span>{nextXPFromLvl(skillLvl)}</span>
        </div>
        <div className="h-1 w-full bg-rust-900 ">
          <div
            className="h-1 bg-flame-300"
            style={{ width: percentFromNext + "%" }}
          ></div>
        </div>
      </CardSM>
    </li>
  ) : (
    <></>
  );
}

export default async function UserInfoPage() {
  const playerData = await getUserData({ cookieData: cookies() });
  if (playerData.error) {
    console.error(playerData.error.message);
  }
  const user = playerData.data;
  console.log("user", user);

  return (
    <div className="flex flex-col container">
      {playerData.error && (
        <div className="text-red-500">{playerData.error.message}</div>
      )}

      <div className="prose">
        <h2 className="text-xl">{user.name}</h2>

        <h4>Faction: {user.faction}</h4>
        <h4>Background: {user.background}</h4>
        <h4>Class: {user.charClass}</h4>

        <h5>Red Chits: {user.currency?.RED_CHIT}</h5>
        <h5>Black Marks: {user.currency?.BLACK_MARK}</h5>
      </div>
      <ul className="flex flex-col gap-3 list-none max-w-md">
        <Skill
          skillID="TechMelee"
          skillXP={user.skills.xp_tech_melee}
          skillLvl={user.skills.tech_melee}
        />
        <Skill
          skillID="TradMelee"
          skillXP={user.skills.xp_trad_melee}
          skillLvl={user.skills.trad_melee}
        />
        <Skill
          skillID="TechRanged"
          skillXP={user.skills.xp_tech_ranged}
          skillLvl={user.skills.tech_ranged}
        />
        <Skill
          skillID="TradRanged"
          skillXP={user.skills.xp_trad_ranged}
          skillLvl={user.skills.trad_ranged}
        />
        <Skill
          skillID="RedMoonHarmony"
          skillXP={user.skills.xp_red_moon_harmony}
          skillLvl={user.skills.red_moon_harmony}
        />
        <Skill
          skillID="BlueMoonSynergy"
          skillXP={user.skills.xp_blue_moon_synergy}
          skillLvl={user.skills.blue_moon_synergy}
        />
        <Skill
          skillID="CyberwearIntegration"
          skillXP={user.skills.xp_cyberwear_integration}
          skillLvl={user.skills.cyberwear_integration}
        />
        <Skill
          skillID="Reflexes"
          skillXP={user.skills.xp_reflexes}
          skillLvl={user.skills.reflexes}
        />
        <Skill
          skillID="Strength"
          skillXP={user.skills.xp_strength}
          skillLvl={user.skills.strength}
        />
        <Skill
          skillID="Charisma"
          skillXP={user.skills.xp_charisma}
          skillLvl={user.skills.charisma}
        />
        <Skill
          skillID="Rhetoric"
          skillXP={user.skills.xp_rhetoric}
          skillLvl={user.skills.rhetoric}
        />
        <Skill
          skillID="Intimidation"
          skillXP={user.skills.xp_intimidation}
          skillLvl={user.skills.intimidation}
        />
      </ul>
    </div>
  );
}
