import { NextResponse } from "next/server";

type MetaConversionPayload = {
  eventName?: string;
  eventId?: string;
  eventSourceUrl?: string;
  metaEventName?: string;
  params?: Record<string, string | number | boolean>;
  userAgent?: string;
};

export async function POST(request: Request) {
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  const pixelId = process.env.META_PIXEL_ID || "988063364058240";

  if (!accessToken) {
    return new Response(null, { status: 204 });
  }

  const body = (await request.json()) as MetaConversionPayload;
  const eventName = body.metaEventName || body.eventName;

  if (!eventName) {
    return NextResponse.json({ ok: false, error: "Missing event name" }, { status: 400 });
  }

  const response = await fetch(`https://graph.facebook.com/v20.0/${pixelId}/events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: body.eventId,
          event_source_url: body.eventSourceUrl,
          action_source: "website",
          user_data: {
            client_user_agent: body.userAgent,
          },
          custom_data: body.params,
        },
      ],
      access_token: accessToken,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return NextResponse.json(
      { ok: false, status: response.status, error: errorText },
      { status: response.status }
    );
  }

  return NextResponse.json({ ok: true });
}