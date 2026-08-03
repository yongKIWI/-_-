import type { Metadata } from "next";
import { siteUrl } from "@/lib/site-url";

export type SocialCardKey =
  | "advertising"
  | "performance"
  | "operations-transformation"
  | "keyword-performance"
  | "rank-monitoring"
  | "system-ownership"
  | "image-operations";

type SocialCard = {
  eyebrow: string;
  title: string;
  before: string;
  after: string;
  label: string;
  note?: string;
};

export const socialCards: Record<SocialCardKey, SocialCard> = {
  advertising: {
    eyebrow: "광고기획 AE · 콘텐츠 운영 혁신",
    title: "성과가 반복되는 구조를 만드는 AE",
    before: "약 2,000",
    after: "약 8,200",
    label: "월 실제 콘텐츠 발행량",
  },
  performance: {
    eyebrow: "PERFORMANCE MARKETING AE · NAVER CONTENT SEO",
    title: "네이버 콘텐츠 SEO 성과 구조를 만든 AE",
    before: "30~40%",
    after: "70~80%",
    label: "네이버 콘텐츠 SEO · TOP 7 진입률",
  },
  "operations-transformation": {
    eyebrow: "콘텐츠 운영 · 업무 자동화",
    title: "현재 월 약 8,200건을 1인이 운영하는 콘텐츠 자동화 체계",
    before: "약 2,000",
    after: "약 8,200",
    label: "월 실제 콘텐츠 발행량",
    note: "운영 인원 2~3명 → 1명",
  },
  "keyword-performance": {
    eyebrow: "NAVER CONTENT SEO · CONTROLLED EXPERIMENTATION",
    title: "키워드 리서치와 통제 실험으로 구축한 네이버 콘텐츠 SEO 시스템",
    before: "30~40%",
    after: "70~80%",
    label: "네이버 콘텐츠 SEO · TOP 7 진입률",
  },
  "rank-monitoring": {
    eyebrow: "MEASUREMENT SYSTEM · WEB AUTOMATION",
    title: "약 52만 건을 측정한 검색 순위 시스템",
    before: "3,000",
    after: "9,500",
    label: "1회 키워드 조사량",
    note: "10개월 누적 약 52만 건 측정",
  },
  "system-ownership": {
    eyebrow: "업무 자동화 · 시스템 구축·운영",
    title: "10개월간 안정 운영으로 검증된 통합 업무 시스템",
    before: "수작업",
    after: "시스템 운영",
    label: "콘텐츠·이미지·성과 측정 자동화 · 10개월 안정 운영",
    note: "기획·개발·배포·운영·변화 대응 100%",
  },
  "image-operations": {
    eyebrow: "RESOURCE EFFICIENCY · IMAGE OPERATIONS",
    title: "촬영 의존도를 낮춘 이미지 운영체계",
    before: "1~2개월",
    after: "3~6개월",
    label: "고객사별 촬영 주기",
    note: "회당 비용 약 30만 원",
  },
};

type SocialMetadataOptions = {
  title: string;
  description: string;
  path: string;
  card: SocialCardKey;
};

export function createSocialMetadata({
  title,
  description,
  path,
  card,
}: SocialMetadataOptions): Pick<
  Metadata,
  "alternates" | "openGraph" | "twitter"
> {
  const canonicalUrl = new URL(path, siteUrl).toString();
  const imageUrl = new URL(`/og/${card}`, siteUrl).toString();

  return {
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "이용택 포트폴리오",
      type: "website",
      locale: "ko_KR",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} — ${socialCards[card].label}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
