import { PostgrestError } from "@supabase/supabase-js";

export function RouteResponse({
  error,
  data,
}: {
  error: PostgrestError | null;
  data: any;
}) {
  if (error) {
    console.error("", error.message)
    return new Response(error.message, {
      status: 500,
    });
  }
  return new Response(data, {
    status: 200,
  });
}
