import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("session")?.value;

  const path = req.nextUrl.pathname;

  if (
    accessToken !== process.env.NEXT_PUBLIC_PASSWORD_PROTECT &&
    path !== "/password-protect"
  ) {
    return NextResponse.redirect(new URL("/password-protect", req.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
