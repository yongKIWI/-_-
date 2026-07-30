"use client";

import { useEffect, useRef, useState } from "react";

const email = "tag.y603@gmail.com";

async function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textArea = document.createElement("textarea");

  textArea.value = value;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
}

export function ContactEmail() {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) {
        window.clearTimeout(resetTimer.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    try {
      await copyText(email);
      setCopied(true);

      if (resetTimer.current) {
        window.clearTimeout(resetTimer.current);
      }

      resetTimer.current = window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="contact-email-row">
      <a className="contact-mail" href={`mailto:${email}`}>
        {email} <span aria-hidden="true">↗</span>
      </a>
      <button
        aria-describedby="copy-email-status"
        className="contact-copy"
        onClick={handleCopy}
        type="button"
      >
        {copied ? "복사 완료" : "이메일 복사"}
      </button>
      <span aria-live="polite" className="sr-only" id="copy-email-status">
        {copied ? "이메일 주소가 복사되었습니다." : ""}
      </span>
    </div>
  );
}
