import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";

export const metadata: Metadata = {
  title: "광고기획 AE",
  description:
    "50~60개 고객사의 콘텐츠 운영과 요구사항을 관리하며, 2~3인 체계를 1인·월 7,200건 체계로 바꾼 광고기획 AE 이용택의 포트폴리오입니다.",
  alternates: {
    canonical: "/advertising-ae",
  },
};

export default function AdvertisingAePage() {
  return <PortfolioPage role="advertising" />;
}
