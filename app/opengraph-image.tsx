import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// The preview shown when the site is shared on LinkedIn, Facebook, Messenger, etc.
export const alt = "Jhondel Caranay, Full-Stack Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(
    join(process.cwd(), "public/images/me-cutout.png"),
  );
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(90deg, #0A192F 55%, #1e1b4b 100%)",
          color: "#ccd6f6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 0 0 80px",
            width: 760,
          }}
        >
          <div style={{ display: "flex", fontSize: 30, color: "#38bdf8" }}>
            Hi, my name is
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 700,
              marginTop: 12,
            }}
          >
            Jhondel Caranay
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 40,
              color: "#8892b0",
              marginTop: 8,
            }}
          >
            Full-Stack Web Developer
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#8892b0",
              marginTop: 36,
              lineHeight: 1.4,
            }}
          >
            ERPs, POS and inventory systems with React, Next.js, Express,
            TypeScript and PostgreSQL.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            position: "relative",
            width: 440,
            height: "100%",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 140,
              left: 40,
              width: 360,
              height: 360,
              borderRadius: 9999,
              background: "rgba(56, 189, 248, 0.35)",
              filter: "blur(60px)",
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> only */}
          <img src={photoSrc} width={440} height={450} alt="" />
        </div>
      </div>
    ),
    size,
  );
}
