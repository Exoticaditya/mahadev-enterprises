import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Intercept x402 payment protocol validation endpoints
  if (pathname === "/api/protected" || pathname === "/api/x402") {
    return new NextResponse(
      JSON.stringify({
        error: "Payment Required",
        message: "This API route requires x402 payment protocol authorization.",
        facilitator: "https://x402.org",
        wallet: "0x0000000000000000000000000000000000000000",
      }),
      {
        status: 402,
        headers: {
          "Content-Type": "application/json",
          "Payment-Required": 'facilitator="https://x402.org", wallet="0x0000000000000000000000000000000000000000"',
          "x-402-payment-required": 'facilitator="https://x402.org", wallet="0x0000000000000000000000000000000000000000"',
        },
      }
    );
  }

  const acceptHeader = request.headers.get("accept");

  // Intercept agent requests for markdown content negotiation
  if (acceptHeader && acceptHeader.includes("text/markdown")) {
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
  matcher: ["/", "/api/protected", "/api/x402"],
};
