import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/middleware";

export const config = {
  matcher: ["/user/:path*", "/play", "/setup"],
};
export async function middleware(request: NextRequest) {

  const { supabase, response } = createClient(request);

  // Refresh session if expired - required for Server Components
  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
  // const auth = await supabase.auth.getSession();
  const [auth, user] = await Promise.all([supabase.auth.getSession(), supabase.auth.getUser()]);

  if (auth.data.session) {
    // Save to cookies
    const { data, error } = await supabase
    .from("account-data")
    .select()
    .eq('user_id', user.data.user?.id);
    // console.log('MW-data', data)

    const isTargetSetup = request.url.includes('/setup');

    if(data?.length === 0 && !isTargetSetup) {
      return NextResponse.redirect(new URL("/setup", request.url));
    } else {
      if(isTargetSetup) {
        return NextResponse.redirect(new URL("/user/info", request.url));
      } else {
        return NextResponse.next();
      }
    }
  } else {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
