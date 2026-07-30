import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";

export const metadata: Metadata = {
  title: "퍼포먼스 마케팅 AE",
  description:
    "조회수·경쟁도 기반 키워드 전략과 약 52만 건의 검색 순위 측정으로 상위 7위 노출률을 70~80%까지 높인 이용택의 포트폴리오입니다.",
  alternates: {
    canonical: "/performance-ae",
  },
};

export default function PerformanceAePage() {
  return <PortfolioPage role="performance" />;
}
