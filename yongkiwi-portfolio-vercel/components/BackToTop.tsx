"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateVisibility = () => {
      setIsVisible(window.scrollY > 700);
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateVisibility);
    };

    updateVisibility();
    window.addEventListener("scroll", requestUpdate, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  const scrollToTop = () => {
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches
      ? "auto"
      : "smooth";

    window.scrollTo({ behavior, top: 0 });
  };

  return (
    <button
      aria-label="맨 위로"
      className="floating-back-to-top"
      onClick={scrollToTop}
      type="button"
    >
      <span aria-hidden="true">↑</span>
      <span className="floating-back-to-top-label">맨 위로</span>
    </button>
  );
}
