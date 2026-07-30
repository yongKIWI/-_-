import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";

type SiteHeaderProps = {
  compact?: boolean;
};

export function SiteHeader({ compact = false }: SiteHeaderProps) {
  const href = (anchor: string) => (compact ? `/${anchor}` : anchor);

  return (
    <>
      <a className="skip-link" href="#main-content">
        본문으로 건너뛰기
      </a>
      <header className="site-header">
        <div className="header-inner">
          <Link className="wordmark" href="/">
            <b>이용택</b>
            <span>Marketing AE · YONGKIWI</span>
          </Link>

          <nav className="desktop-nav" aria-label="주요 메뉴">
            <Link href={href("#impact")}>성과</Link>
            <Link href={href("#projects")}>프로젝트</Link>
            <Link href={href("#process")}>일하는 방식</Link>
            <Link href={href("#career")}>경력</Link>
            <Link href={href("#contact")}>연락처</Link>
          </nav>

          <MobileNav compact={compact} />
        </div>
      </header>
    </>
  );
}
