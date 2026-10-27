import type { ReactNode } from "react";

type ContentDisclosureProps = {
  title: ReactNode;
  children: ReactNode;
  eyebrow?: ReactNode;
  preview?: ReactNode;
  id?: string;
  className?: string;
};

export function ContentDisclosure({
  title,
  children,
  eyebrow,
  preview,
  id,
  className = "",
}: ContentDisclosureProps) {
  return (
    <details className={`content-disclosure ${className}`} id={id}>
      <summary>
        <span className="disclosure-copy">
          {eyebrow ? <span className="disclosure-eyebrow">{eyebrow}</span> : null}
          <strong>{title}</strong>
          {preview ? <span className="disclosure-preview">{preview}</span> : null}
        </span>
        <span className="disclosure-toggle" aria-hidden="true">
          <span className="when-closed">펼치기</span>
          <span className="when-open">접기</span>
          <b>＋</b>
        </span>
      </summary>
      <div className="disclosure-body">{children}</div>
    </details>
  );
}
