"use client";

import { useEffect } from "react";

// Preserve links to sections even when the destination is inside a closed panel.
export function DisclosureNavigation() {
  useEffect(() => {
    let frame = 0;
    const reveal = (hash: string) => {
      if (!hash) return;
      let id: string;
      try {
        id = decodeURIComponent(hash.slice(1));
      } catch {
        return;
      }
      const target = document.getElementById(id);
      if (!target) return;
      let parent: HTMLElement | null = target;
      let opened = false;
      while (parent) {
        if (parent instanceof HTMLDetailsElement && !parent.open) {
          parent.open = true;
          opened = true;
        }
        parent = parent.parentElement;
      }
      if (opened) {
        window.cancelAnimationFrame(frame);
        frame = window.requestAnimationFrame(() => {
          target.scrollIntoView({ block: "start", behavior: "instant" });
        });
      }
    };
    const onHash = () => reveal(window.location.hash);
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(anchor instanceof HTMLAnchorElement) || anchor.target === "_blank") return;
      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin === window.location.origin && destination.pathname === window.location.pathname && destination.search === window.location.search) {
        reveal(destination.hash);
      }
    };
    onHash();
    window.addEventListener("hashchange", onHash);
    document.addEventListener("click", onClick);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", onHash);
      document.removeEventListener("click", onClick);
    };
  }, []);
  return null;
}
