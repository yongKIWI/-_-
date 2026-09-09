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
    eyebrow: "광고기획 AE · 고객사 운영·콘텐츠 SEO (수정필요 232)",
    title: "고객과 콘텐츠 방향을 정하고 제작부터 성과 개선까지 맡는 AE (수정필요 233)",
    before: "약 2,000",
    after: "약 8,200",
    label: "월 실제 콘텐츠 발행량",
  },
  performance: {
    eyebrow: "네이버 콘텐츠 SEO · 데이터 분석·실험 (수정필요 234)",
    title: "검색 수요로 키워드를 고르고 콘텐츠 실험으로 성과를 높이는 AE (수정필요 235)",
    before: "30~40%",
    after: "70~80%",
    label: "네이버 통합검색 TOP 7 진입률 (수정필요 236)",
  },
  "operations-transformation": {
    eyebrow: "콘텐츠 운영 · 업무 자동화",
    title: "월 약 8,200건 운영을 뒷받침한 콘텐츠 제작 통합앱 (수정필요 237)",
    before: "약 2,000",
    after: "약 8,200",
    label: "월 실제 콘텐츠 발행량",
    note: "운영 인원 2~3명 → 1명",
  },
  "keyword-performance": {
    eyebrow: "네이버 콘텐츠 SEO · A/B 테스트 (수정필요 238)",
    title: "키워드 분석과 콘텐츠 실험으로 개선한 네이버 검색 성과 (수정필요 239)",
    before: "30~40%",
    after: "70~80%",
    label: "네이버 통합검색 TOP 7 진입률 (수정필요 240)",
  },
  "rank-monitoring": {
    eyebrow: "키워드 순위 조사 · 보고 자동화 (수정필요 241)",
    title: "키워드 순위 조사·보고 자동화 (수정필요 242)",
    before: "3,000",
    after: "1만~1.2만",
    label: "1회 키워드 조사량",
    note: "10개월 누적 약 52만 회 조사 · 추정 (수정필요 243)",
  },
  "system-ownership": {
    eyebrow: "업무 자동화 · 유지보수 (수정필요 244)",
    title: "업무에 도입해 10개월간 운영한 자동화 도구 (수정필요 245)",
    before: "수작업",
    after: "시스템 운영",
    label: "이미지·콘텐츠·모니터링 업무 자동화 (수정필요 246)",
    note: "1인 기획·개발·실무 적용·유지보수 (수정필요 247)",
  },
  "image-operations": {
    eyebrow: "이미지 처리 자동화 · 촬영 주기 개선 (수정필요 248)",
    title: "이미지 처리와 촬영 부담을 줄인 업무 도구 (수정필요 249)",
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
