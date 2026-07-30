import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#171815",
          border: "12px solid #b7d53d",
          color: "#f4f3ed",
          display: "flex",
          fontSize: 70,
          fontWeight: 900,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-0.06em",
          width: "100%",
        }}
      >
        YT
      </div>
    ),
    size,
  );
}
