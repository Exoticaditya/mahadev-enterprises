import { NextResponse } from "next/server";

export async function GET() {
  // Return HTTP 402 Payment Required for x402 payment protocol validation
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

export async function POST() {
  return GET();
}
