"use client";

import { useEffect, useRef, useState } from "react";

const projectSections = [
  { id: "problem", label: "문제" },
  { id: "decision", label: "실행" },
  { id: "change", label: "변화" },
  { id: "result", label: "결과" },
  { id: "measurement", label: "측정" },
  { id: "learning", label: "배운 점" },
] as const;

type ProjectSectionId = (typeof projectSections)[number]["id"];

function useActiveProjectSection() {
  const [activeSection, setActiveSection] =
    useState<ProjectSectionId>("problem");

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      const marker = window.scrollY + 240;
      let current: ProjectSectionId = "problem";

      projectSections.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section && section.offsetTop <= marker) {
          current = item.id;
        }
      });

      setActiveSection((previous) =>
        previous === current ? previous : current,
      );
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
  }, []);

  return activeSection;
}

export function ProjectToc({ className }: { className: string }) {
  const activeSection = useActiveProjectSection();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    const activeLink = nav?.querySelector<HTMLAnchorElement>(
      `[data-section="${activeSection}"]`,
    );

    if (!nav || !activeLink || nav.scrollWidth <= nav.clientWidth) {
      return;
    }

    const target =
      activeLink.offsetLeft - (nav.clientWidth - activeLink.offsetWidth) / 2;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches
      ? "auto"
      : "smooth";

    nav.scrollTo({
      behavior,
      left: Math.max(0, target),
    });
  }, [activeSection]);

  return (
    <nav
      aria-label="프로젝트 목차"
      className={className}
      ref={navRef}
    >
      <span>PROJECT INDEX</span>
      {projectSections.map((section, index) => {
        const isActive = activeSection === section.id;

        return (
          <a
            aria-current={isActive ? "location" : undefined}
            className={isActive ? "is-active" : undefined}
            data-section={section.id}
            href={`#${section.id}`}
            key={section.id}
          >
            {String(index + 1).padStart(2, "0")} {section.label}
          </a>
        );
      })}
    </nav>
  );
}
