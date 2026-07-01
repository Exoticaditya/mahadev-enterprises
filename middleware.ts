import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const acceptHeader = request.headers.get("accept");

  // Intercept agent requests for markdown
  if (acceptHeader && acceptHeader.includes("text/markdown")) {
    const { pathname } = request.nextUrl;
    if (pathname === "/") {
      return NextResponse.rewrite(new URL("/llms-full.txt", request.url), {
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
        },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
