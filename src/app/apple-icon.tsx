import { ImageResponse } from "next/og";

/* Apple touch icon — same target mark, sized for home-screen bookmarks. */

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const S = size.width;
  const bw = Math.round(S * 0.07 * 10) / 10;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#18181B",
          borderRadius: S * 0.22,
        }}
      >
        <div
          style={{
            width: S * 0.62,
            height: S * 0.62,
            borderRadius: S,
            border: `${bw}px solid #FFFFFF`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: S * 0.34,
              height: S * 0.34,
              borderRadius: S,
              border: `${bw}px solid #94A3B8`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: S * 0.13,
                height: S * 0.13,
                borderRadius: S,
                background: "#FFFFFF",
              }}
            />
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
