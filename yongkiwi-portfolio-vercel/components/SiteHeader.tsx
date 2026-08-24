import Link from "next/link";
import {
  DesktopNav,
  MobileNav,
} from "@/components/SiteNavigation";

type SiteHeaderProps = {
  compact?: boolean;
};

export function SiteHeader({ compact = false }: SiteHeaderProps) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        본문으로 건너뛰기
      </a>
      <header className="site-header">
        <div className="header-inner">
          <Link className="wordmark" href="/">
            <b>이용택</b>
            <span>마케팅 AE · 이용택 포트폴리오 (수정필요)</span>
          </Link>

          <DesktopNav compact={compact} />
          <MobileNav compact={compact} />
        </div>
      </header>
    </>
  );
}
