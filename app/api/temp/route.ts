import { RouteResponse } from "@/utils/api/route-response.server";
import { CharacterSetup, characterSetupTest } from "@/utils/form-types/setup";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

type Upskill = {
  skillID: any;
  value: any;
  valueXP: any;
};

export async function POST(request: Request) {
  const supabase = createClient(cookies());

  const [testVal, user] = await Promise.all([
    request.json(),
    supabase.auth.getUser(),
  ]);
  const x = testVal as Upskill;

  const { data, error } = await supabase
    .from("skills")
    .upsert({
      tech_melee: 205,
      xp_tech_melee: 560,
    })
    .eq("user_id", user.data.user?.id)
    .select();
    
    return RouteResponse({ data, error });
}
