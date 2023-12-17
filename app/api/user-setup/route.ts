import { RouteResponse } from "@/utils/api/route-response.server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const supabase = createClient(cookies());

  const [newVal, user] = await Promise.all([request.json(), supabase.auth.getUser()]);
  
  const { data, error } = await supabase
    .from("account-setup")
    .upsert({ is_setup: newVal.is_setup })
    .eq('user_id', user.data.user?.id)
    .select();

  return RouteResponse({ data, error });
}
