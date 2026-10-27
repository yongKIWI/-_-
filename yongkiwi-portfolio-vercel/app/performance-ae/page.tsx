import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";
import { createSocialMetadata } from "@/lib/site-meta";

const description =
  "키워드 리서치, SERP 분석, 콘텐츠 A/B 테스트와 순위 측정을 연결해 실수요 키워드의 네이버 통합검색 콘텐츠 TOP 7 진입률을 40~60% 수준으로 높인 이용택의 포트폴리오입니다.";

export const metadata: Metadata = {
  title: "퍼포먼스 마케팅 AE",
  description,
  ...createSocialMetadata({
    title: "퍼포먼스 마케팅 AE | 이용택 포트폴리오",
    description,
    path: "/performance-ae",
    card: "performance",
  }),
};

export default function PerformanceAePage() {
  return <PortfolioPage role="performance" />;
}
