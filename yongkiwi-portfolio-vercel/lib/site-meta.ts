import type { Metadata } from "next";
import { siteUrl } from "@/lib/site-url";

export type SocialCardKey =
  | "advertising"
  | "performance"
  | "operations-transformation"
  | "keyword-performance"
  | "rank-monitoring"
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
    eyebrow: "ADVERTISING AE · MARKETING OPERATIONS",
    title: "성과가 반복되는 구조를 만드는 AE",
    before: "약 2,000",
    after: "약 8,200",
    label: "월 실제 콘텐츠 발행량",
  },
  performance: {
    eyebrow: "PERFORMANCE MARKETING AE · SEARCH CONTENT",
    title: "측정 가능한 성과 구조를 만드는 AE",
    before: "30~40%",
    after: "70~80%",
    label: "통합검색 1~7위 진입률",
  },
  "operations-transformation": {
    eyebrow: "MARKETING OPERATIONS · AI AUTOMATION",
    title: "현재 월 약 8,200건을 1인이 운영하는 콘텐츠 오퍼레이션",
    before: "약 2,000",
    after: "약 8,200",
    label: "월 실제 콘텐츠 발행량",
    note: "운영 인원 2~3명 → 1명",
  },
  "keyword-performance": {
    eyebrow: "KEYWORD STRATEGY · PERFORMANCE CONTENT",
    title: "조회수·경쟁도로 설계한 키워드 선별 시스템",
    before: "30~40%",
    after: "70~80%",
    label: "통합검색 1~7위 진입률",
  },
  "rank-monitoring": {
    eyebrow: "MEASUREMENT SYSTEM · WEB AUTOMATION",
    title: "약 52만 건을 측정한 검색 순위 시스템",
    before: "3,000",
    after: "9,500",
    label: "1회 키워드 조사량",
    note: "10개월 누적 약 52만 건 측정",
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
