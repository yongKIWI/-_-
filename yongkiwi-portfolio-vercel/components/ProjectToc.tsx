"use client";

import { useEffect, useId, useRef, useState } from "react";

const projectSections = [
  { id: "problem", label: "문제" },
  { id: "decision", label: "실행" },
  { id: "result", label: "결과" },
  { id: "measurement", label: "측정" },
] as const;

const experimentSections = [
  { id: "experiments", label: "실험" },
  ...projectSections,
] as const;

type ProjectSectionId = (typeof experimentSections)[number]["id"];

function useActiveProjectSection(hasExperiments: boolean) {
  const [activeSection, setActiveSection] =
    useState<ProjectSectionId>(hasExperiments ? "experiments" : "problem");

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      const headerHeight = document.querySelector(".site-header")?.getBoundingClientRect().height ?? 76;
      const mobileToc = document.querySelector(".project-mobile-toc");
      const tocHeight = mobileToc?.getBoundingClientRect().height ?? 0;
      const marker = window.scrollY + headerHeight + tocHeight + 40;
      let current: ProjectSectionId = hasExperiments ? "experiments" : "problem";

      (hasExperiments ? experimentSections : projectSections).forEach((item) => {
        const section = document.getElementById(item.id);

        if (section && section.getBoundingClientRect().top + window.scrollY <= marker) {
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
    const resizeObserver = new ResizeObserver(requestUpdate);
    const article = document.querySelector(".project-article");
    if (article) resizeObserver.observe(article);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(delayedUpdate);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("hashchange", requestUpdate);
      resizeObserver.disconnect();
    };
  }, [hasExperiments]);

  return activeSection;
}

export function ProjectToc({ className, hasExperiments = false }: { className: string; hasExperiments?: boolean }) {
  const activeSection = useActiveProjectSection(hasExperiments);
  const sections = hasExperiments ? experimentSections : projectSections;
  const navRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const isMobile = className === "project-mobile-toc";
  const activeLabel = sections.find((section) => section.id === activeSection)?.label;

  useEffect(() => {
    if (!isOpen) return;
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !navRef.current?.contains(event.target)) setIsOpen(false);
    };
    const closeOnResize = () => setIsOpen(false);
    document.addEventListener("pointerdown", closeOutside);
    window.addEventListener("resize", closeOnResize);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      window.removeEventListener("resize", closeOnResize);
    };
  }, [isOpen]);

  return (
    <nav
      aria-label="프로젝트 목차"
      className={className}
      data-section-count={sections.length}
      ref={navRef}
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          setIsOpen(false);
          triggerRef.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false);
      }}
    >
      {isMobile ? (
        <button
          type="button"
          className="project-toc-trigger"
          ref={triggerRef}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span>목차 <span className="toc-current">· 현재: {activeLabel}</span></span>
          <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
        </button>
      ) : null}
      <div id={panelId} className="project-toc-links" hidden={isMobile && !isOpen}>
      <span>프로젝트 목차 (수정필요 229)</span>
      {sections.map((section, index) => {
        const isActive = activeSection === section.id;

        return (
          <a
            aria-current={isActive ? "location" : undefined}
            className={isActive ? "is-active" : undefined}
            data-section={section.id}
            href={`#${section.id}`}
            key={section.id}
            onClick={(event) => {
              if (!isMobile || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
              setIsOpen(false);
              window.requestAnimationFrame(() => {
                const target = document.getElementById(section.id);
                if (target) {
                  target.tabIndex = -1;
                  target.focus({ preventScroll: true });
                }
              });
            }}
          >
            {String(index + 1).padStart(2, "0")} {section.label}
          </a>
        );
      })}
      </div>
    </nav>
  );
}
