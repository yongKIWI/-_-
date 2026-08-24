import { ImageResponse } from "next/og";
import { socialCards, type SocialCardKey } from "@/lib/site-meta";

export const runtime = "edge";

type SocialCardRouteProps = {
  params: Promise<{ key: string }>;
};

export async function GET(
  _request: Request,
  { params }: SocialCardRouteProps,
) {
  const { key } = await params;
  const card = socialCards[key as SocialCardKey];

  if (!card) {
    return new Response("Social card not found", { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#f4f3ed",
          color: "#171815",
          display: "flex",
          fontFamily: "sans-serif",
          height: "100%",
          padding: "48px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "2px solid #171815",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "46px",
            width: "46%",
          }}
        >
          <div
            style={{
              color: "#365615",
              display: "flex",
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: "0.08em",
            }}
          >
            {card.eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <div style={{ display: "flex", fontSize: 30, fontWeight: 800 }}>
              이용택 · 마케팅 AE (수정필요)
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 48,
                fontWeight: 900,
                letterSpacing: "-0.05em",
                lineHeight: 1.12,
              }}
            >
              {card.title}
            </div>
          </div>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              fontSize: 18,
              fontWeight: 900,
              gap: "14px",
            }}
          >
            <span>YONGKIWI</span>
            <span style={{ background: "#b7d53d", height: 12, width: 92 }} />
          </div>
        </div>

        <div
          style={{
            borderBottom: "2px solid #171815",
            borderRight: "2px solid #171815",
            borderTop: "2px solid #171815",
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "46px",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                background: "#171815",
                color: "#ffffff",
                display: "flex",
                fontSize: 18,
                fontWeight: 900,
                padding: "8px 16px",
              }}
            >
              BEFORE
            </span>
            <span
              style={{
                background: "#b7d53d",
                color: "#171815",
                display: "flex",
                fontSize: 18,
                fontWeight: 900,
                padding: "8px 16px",
              }}
            >
              AFTER
            </span>
          </div>

          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <strong
              style={{
                display: "flex",
                fontSize: card.before.length > 7 ? 58 : 78,
                letterSpacing: "-0.06em",
              }}
            >
              {card.before}
            </strong>
            <span style={{ display: "flex", fontSize: 62 }}>→</span>
            <strong
              style={{
                color: "#789a14",
                display: "flex",
                fontSize: card.after.length > 7 ? 58 : 78,
                letterSpacing: "-0.06em",
              }}
            >
              {card.after}
            </strong>
          </div>

          <div
            style={{
              borderTop: "2px solid #171815",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              paddingTop: "22px",
            }}
          >
            <span style={{ display: "flex", fontSize: 26, fontWeight: 900 }}>
              {card.label}
            </span>
            {card.note ? (
              <span
                style={{ color: "#66675f", display: "flex", fontSize: 18 }}
              >
                {card.note}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
