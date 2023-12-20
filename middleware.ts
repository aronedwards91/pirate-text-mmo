import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/middleware";

export const config = {
  matcher: ["/user/:path*", "/play", "/setup"],
};
export async function middleware(request: NextRequest) {

  const { supabase, response } = createClient(request);
  console.log('MW', request.url)

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
    console.log('MW-data', data)

    const isURLTargetSetup = request.url.includes('/setup');
    const isUserSetup = (data || [])?.length > 0;

    if(isUserSetup) {
      if(isURLTargetSetup) {
        return NextResponse.redirect(new URL("/user/info", request.url));
      } else {
        return NextResponse.next();
      }
    } else {
      if(isURLTargetSetup) {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(new URL("/setup", request.url));
      }
    }

  } else {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
