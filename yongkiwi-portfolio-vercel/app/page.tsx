import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";

export const metadata: Metadata = {
  title: {
    absolute: "광고기획 AE | 이용택 포트폴리오",
  },
  description:
    "고객사의 목표를 성과가 반복되는 실행체계로 연결하는 광고기획 AE 이용택의 포트폴리오입니다.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <PortfolioPage role="advertising" />;
}
