import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  const token = req.cookies.get("access_token")?.value;

  console.log("token: ", token, "\n-----------------");

  const { pathname } = req.nextUrl;

  if (pathname === "/login") {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!login|_next/static|_next/image|favicon.ico).*)"],
};
