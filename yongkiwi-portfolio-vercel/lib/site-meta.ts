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
    eyebrow: "광고기획 AE · 네이버 콘텐츠 운영·업무 개선 (수정필요 232)",
    title: "콘텐츠 운영의 병목을 찾아 고객 대응과 검색 성과를 개선한 AE (수정필요 233)",
    before: "약 2,000",
    after: "약 8,200",
    label: "월 실제 콘텐츠 발행량",
  },
  performance: {
    eyebrow: "퍼포먼스 마케팅 AE · 네이버 콘텐츠 SEO (수정필요 234)",
    title: "콘텐츠를 데이터로 선별하고 추적하는 방식으로 바꾼 AE (수정필요 235)",
    before: "30~40%",
    after: "70~80%",
    label: "네이버 통합검색 콘텐츠 영역 1~7위 진입률 (수정필요 236)",
  },
  "operations-transformation": {
    eyebrow: "콘텐츠 운영 · 업무 자동화",
    title: "1인이 월 약 8,200건을 운영하는 콘텐츠 제작 통합앱 (수정필요 237)",
    before: "약 2,000",
    after: "약 8,200",
    label: "월 실제 콘텐츠 발행량",
    note: "운영 인원 2~3명 → 1명",
  },
  "keyword-performance": {
    eyebrow: "네이버 콘텐츠 SEO · A/B 테스트 (수정필요 238)",
    title: "키워드 선별·콘텐츠 실험·순위 추적을 연결한 네이버 콘텐츠 SEO (수정필요 239)",
    before: "30~40%",
    after: "70~80%",
    label: "네이버 통합검색 콘텐츠 영역 1~7위 진입률 (수정필요 240)",
  },
  "rank-monitoring": {
    eyebrow: "키워드 순위 측정 · 웹 자동화 (수정필요 241)",
    title: "10개월간 추정 약 52만 회를 조사한 키워드 순위 시스템 (수정필요 242)",
    before: "3,000",
    after: "9,500",
    label: "1회 키워드 조사량",
    note: "10개월 추정 누적 약 52만 회 조사 (수정필요 243)",
  },
  "system-ownership": {
    eyebrow: "업무 자동화 · 도구 운영·유지보수 (수정필요 244)",
    title: "10개월간 실무에 사용한 업무 자동화 도구 (수정필요 245)",
    before: "수작업",
    after: "시스템 운영",
    label: "콘텐츠·이미지·성과 측정 자동화 · 10개월 실사용 (수정필요 246)",
    note: "1인 기획·개발·배포·운영·변화 대응 (수정필요 247)",
  },
  "image-operations": {
    eyebrow: "이미지 처리 자동화 · 촬영 부담 감소 (수정필요 248)",
    title: "촬영 횟수와 이미지 처리 시간을 줄인 운영 도구 (수정필요 249)",
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
