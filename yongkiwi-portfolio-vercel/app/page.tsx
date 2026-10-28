import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";
import { createSocialMetadata } from "@/lib/site-meta";

const description =
  "50~60개 업체의 콘텐츠 기획·제작·배포 관리와 검색 성과 분석을 맡은 AE 이용택. 제작 자동화와 네이버 콘텐츠 SEO 개선 사례를 소개합니다.";

export const metadata: Metadata = {
  title: {
    absolute: "AE 이용택 | 포트폴리오",
  },
  description,
  ...createSocialMetadata({
    title: "AE 이용택 | 포트폴리오",
    description,
    path: "/",
    card: "ae",
  }),
};

export default function Home() {
  return <PortfolioPage />;
}
