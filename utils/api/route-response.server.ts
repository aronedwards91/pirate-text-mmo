import { PostgrestError } from "@supabase/supabase-js";

type ManualError = {
  message: string;
};

export function RouteResponse({
  error,
  data,
}: {
  error: PostgrestError | ManualError | null;
  data: any;
}) {
  if (error) {
    console.error("Svr Err", error);
    return new Response('Server Error', {
      status: 500,
    });
  }
  return new Response(data, {
    status: 200,
  });
}
