import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";
import { createSocialMetadata } from "@/lib/site-meta";

const description =
  "조회수·경쟁도 기반 키워드 선별과 콘텐츠 변수 통제 실험, 순위 측정을 연결해 네이버 통합검색 콘텐츠 TOP 7 진입률을 70~80% 수준으로 높인 이용택의 포트폴리오입니다.";

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
