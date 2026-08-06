import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";
import { createSocialMetadata } from "@/lib/site-meta";

const description =
  "고객사와 직접 소통하며 콘텐츠 운영의 문제를 찾고, 업무 자동화와 성과 측정으로 실제 결과를 개선한 광고기획 AE 이용택의 포트폴리오입니다.";

export const metadata: Metadata = {
  title: {
    absolute: "광고기획 AE | 이용택 포트폴리오",
  },
  description,
  ...createSocialMetadata({
    title: "광고기획 AE | 이용택 포트폴리오",
    description,
    path: "/",
    card: "advertising",
  }),
};

export default function Home() {
  return <PortfolioPage role="advertising" />;
}
