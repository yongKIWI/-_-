import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";
import { createSocialMetadata } from "@/lib/site-meta";

const description =
  "조회수로 검색 수요를 확인하고 경쟁도로 콘텐츠 진입 가능성을 검증한 키워드만 발행해, 통합검색 1~7위 진입률을 70~80%로 높인 이용택의 포트폴리오입니다.";

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
