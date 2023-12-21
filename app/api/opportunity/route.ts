import { RouteResponse } from "@/utils/api/route-response.server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const supabase = createClient(cookies());

  const [opportunityData, user] = await Promise.all([
    request.json(),
    supabase.auth.getUser(),
  ]);

  // check opportunity unlocked
  const isUnlocked = false;

  if (isUnlocked) {
    const messageMap: string[] = [];

  // get opportunity data
  // get player data
  // check completion (+ flavour text)
  // roll for loot (+ flavour text)
  // update player values, xp gain (+ flavour text)
  // return data

  } else {
    return RouteResponse({
      data: null,
      error: {
        message: "opportunity not unlocked",
      },
    });
  }

}
