import { RouteResponse } from "@/utils/api/route-response.server";
import { CharacterSetup, characterSetupTest } from "@/utils/form-types/setup";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const supabase = createClient(cookies());

  const [newUser, user] = await Promise.all([
    request.json(),
    supabase.auth.getUser(),
  ]);

  if (characterSetupTest(newUser)) {
    const validatedData = newUser as CharacterSetup;

    const [charClass, location] = await Promise.all([
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
    ]);

    if (!charClass.error && !location.error) {
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
      error: charClass.error || location.error,
    });
  } else {
    return new Response("Form content incorrect", {
      status: 422,
    });
  }
}
