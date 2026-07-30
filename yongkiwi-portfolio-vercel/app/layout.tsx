import type { Metadata } from "next";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "이용택 포트폴리오 | 광고기획 AE",
    template: "%s | 이용택 포트폴리오",
  },
  description:
    "AI와 자동화를 활용해 고객사 콘텐츠 운영체계와 검색 노출 성과를 개선한 마케팅 AE 이용택의 포트폴리오입니다.",
  openGraph: {
    title: "이용택 포트폴리오 | Marketing AE",
    description:
      "2~3인·월 2,000건의 운영을 1인·월 7,200건 체계로 바꾸고, 상위 7위 노출률을 70~80%까지 높였습니다.",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og.png",
        alt: "이용택 마케팅 AE 포트폴리오 — 월간 콘텐츠 발행량 2,000에서 7,200으로",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "이용택 포트폴리오 | Marketing AE",
    description:
      "고객 성과를 가로막는 병목을 발견하고, 반복 가능한 운영체계로 바꾸는 마케팅 AE.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
