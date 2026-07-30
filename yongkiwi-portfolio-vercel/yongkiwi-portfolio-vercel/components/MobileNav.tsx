"use client";

import Link from "next/link";
import { useRef } from "react";

type MobileNavProps = {
  compact?: boolean;
};

const navigation = [
  { href: "#impact", label: "성과" },
  { href: "#projects", label: "프로젝트" },
  { href: "#process", label: "일하는 방식" },
  { href: "#career", label: "경력" },
  { href: "#contact", label: "연락처" },
] as const;

export function MobileNav({ compact = false }: MobileNavProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const href = (anchor: string) => (compact ? `/${anchor}` : anchor);

  const closeMenu = () => {
    detailsRef.current?.removeAttribute("open");
  };

  return (
    <details
      className="mobile-nav"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          closeMenu();
        }
      }}
      ref={detailsRef}
    >
      <summary aria-label="메뉴">메뉴</summary>
      <nav aria-label="모바일 메뉴">
        {navigation.map((item) => (
          <Link href={href(item.href)} key={item.href} onClick={closeMenu}>
            {item.label}
          </Link>
        ))}
      </nav>
    </details>
  );
}
