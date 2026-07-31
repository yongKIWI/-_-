import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { BackToTop } from "@/components/BackToTop";
import { JsonLd } from "@/components/JsonLd";
import { createSocialMetadata } from "@/lib/site-meta";
import { siteUrl } from "@/lib/site-url";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./globals.css";

const description =
  "AI와 자동화를 활용해 고객사 콘텐츠 운영체계와 검색 노출 성과를 개선한 마케팅 AE 이용택의 포트폴리오입니다.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "이용택 포트폴리오 | 광고기획 AE",
    template: "%s | 이용택 포트폴리오",
  },
  description,
  authors: [{ name: "이용택" }],
  creator: "이용택",
  ...createSocialMetadata({
    title: "광고기획 AE | 이용택 포트폴리오",
    description,
    path: "/",
    card: "advertising",
  }),
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f4f3ed",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "이용택",
  url: siteUrl.toString(),
  jobTitle: "광고기획 AE · 퍼포먼스 마케팅 AE",
  worksFor: {
    "@type": "Organization",
    name: "웨이팅리스트",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "한남대학교",
  },
  knowsAbout: [
    "광고기획",
    "퍼포먼스 마케팅",
    "콘텐츠 운영",
    "키워드 전략",
    "마케팅 자동화",
    "웹 자동화",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" lang="ko">
      <body>
        <JsonLd data={personJsonLd} />
        {children}
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
