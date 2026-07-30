import Link from "next/link";

type SiteHeaderProps = {
  compact?: boolean;
};

export function SiteHeader({ compact = false }: SiteHeaderProps) {
  const href = (anchor: string) => (compact ? `/${anchor}` : anchor);

  return (
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

        <details className="mobile-nav">
          <summary aria-label="메뉴 열기">메뉴</summary>
          <nav aria-label="모바일 메뉴">
            <Link href={href("#impact")}>성과</Link>
            <Link href={href("#projects")}>프로젝트</Link>
            <Link href={href("#process")}>일하는 방식</Link>
            <Link href={href("#career")}>경력</Link>
            <Link href={href("#contact")}>연락처</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
