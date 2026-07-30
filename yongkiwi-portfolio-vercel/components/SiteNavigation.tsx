"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type NavigationProps = {
  compact?: boolean;
};

const navigation = [
  { id: "impact", label: "성과" },
  { id: "projects", label: "프로젝트" },
  { id: "process", label: "일하는 방식" },
  { id: "career", label: "경력" },
  { id: "contact", label: "연락처" },
] as const;

function useActiveSection(enabled: boolean) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    let frame = 0;

    const updateActiveSection = () => {
      const marker = window.scrollY + 160;
      let current: string | null = null;

      navigation.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section && section.offsetTop <= marker) {
          current = item.id;
        }
      });

      setActiveSection(current);
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    const delayedUpdate = window.setTimeout(updateActiveSection, 400);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("hashchange", requestUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(delayedUpdate);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("hashchange", requestUpdate);
    };
  }, [enabled]);

  return activeSection;
}

export function DesktopNav({ compact = false }: NavigationProps) {
  const activeSection = useActiveSection(!compact);
  const href = (id: string) => (compact ? `/#${id}` : `#${id}`);

  return (
    <nav className="desktop-nav" aria-label="주요 메뉴">
      {navigation.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <Link
            aria-current={isActive ? "location" : undefined}
            className={isActive ? "is-active" : undefined}
            href={href(item.id)}
            key={item.id}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function MobileNav({ compact = false }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(!compact);
  const href = (id: string) => (compact ? `/#${id}` : `#${id}`);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", closeWithEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeWithEscape);
    };
  }, [isOpen]);

  return (
    <div className={`mobile-nav${isOpen ? " is-open" : ""}`}>
      <button
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        className="mobile-nav-trigger"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        {isOpen ? "닫기" : "메뉴"}
      </button>

      {isOpen && typeof document !== "undefined"
        ? createPortal(
            <button
              aria-label="메뉴 닫기"
              className="mobile-nav-backdrop"
              onClick={() => setIsOpen(false)}
              type="button"
            />,
            document.body,
          )
        : null}

      {isOpen ? (
        <>
          <nav aria-label="모바일 메뉴" id="mobile-navigation">
            {navigation.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <Link
                  aria-current={isActive ? "location" : undefined}
                  className={isActive ? "is-active" : undefined}
                  href={href(item.id)}
                  key={item.id}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </>
      ) : null}
    </div>
  );
}
