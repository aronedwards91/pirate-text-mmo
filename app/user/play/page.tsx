import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { PostgrestError } from "@supabase/supabase-js";
import { Opportunities } from "@/containers/play/Opportunities";

function getUnlockedOpportunitiesByLocale(location: string) {
  return ["HELLAS_CITY_SLUMS__RATS"];
}

type Response = {
  data: any;
  error: PostgrestError | null;
};
async function getData({ cookieData }: { cookieData: ReadonlyRequestCookies }) {
  const supabase = createClient(cookieData);

  const user = await supabase.auth.getUser();

  const resp: Response = {
    data: {},
    error: null,
  };

  const locationResp = await supabase
    .from("location")
    .select(`location`)
    .eq("user_id", user.data.user?.id)
    .limit(1)
    .single();

  if (!locationResp.error) {
    const location = locationResp.data.location;
    resp.data = { location };
    const getUnlockedByLocale = getUnlockedOpportunitiesByLocale(location);

    const OpportunitiesResponse = await supabase
      .schema("content")
      .from("opportunities")
      .select(`*`) // TODO limit cols
      .eq("location", location)
      .in('id', getUnlockedByLocale);

    resp.data = { location, opportunities: OpportunitiesResponse.data };

    if (OpportunitiesResponse.error) resp.error = OpportunitiesResponse.error;
  }

  resp.error = locationResp.error;
  return resp;
}

export default async function PlayPage() {
  const cookieData = cookies();
  const result = await getData({ cookieData });
  
  return (
    <div className="flex flex-col gap-6">
      <h2>Play Page</h2>
      <p>{result.data?.location}</p>
      <p>{result.data?.opportunities?.map((v: any) => v.toString())}</p>

      <Opportunities opportunities={result.data?.opportunities} />
    </div>
  );
}
