import type { ReactElement } from "react";

const base = {
  width: 18,
  height: 18,
  viewBox: "0 0 18 18",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  "aria-hidden": true,
} as const;

const COLUMN_ICONS: Record<string, () => ReactElement> = {
  backlog: () => (
    <svg {...base}>
      <circle cx="9" cy="9" r="7.25" strokeDasharray="2.6 2.2" />
    </svg>
  ),
  todo: () => (
    <svg {...base}>
      <circle cx="9" cy="9" r="7.25" />
    </svg>
  ),
  in_progress: () => (
    <svg {...base}>
      <circle cx="9" cy="9" r="7.25" strokeDasharray="1.2 2.4" />
      <circle cx="9" cy="9" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  ),
  in_review: () => (
    <svg {...base}>
      <circle cx="9" cy="9" r="7.25" />
      <path d="M9 5.5V9l2.2 1.6" strokeLinecap="round" />
    </svg>
  ),
  done: () => (
    <svg {...base}>
      <circle cx="9" cy="9" r="7.25" />
      <path d="M6 9.2l2 2 4-4.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "needs-attention": () => (
    <svg {...base}>
      <path d="M9 2.5l7 12.5H2L9 2.5z" strokeLinejoin="round" />
      <path d="M9 7.5v3.2M9 12.8v.2" strokeLinecap="round" />
    </svg>
  ),
};

export function ColumnIcon({ columnKey }: { columnKey: string }) {
  const Icon = COLUMN_ICONS[columnKey] ?? COLUMN_ICONS.todo!;
  return <Icon />;
}

export function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <rect x="2.5" y="6" width="9" height="6.5" rx="1.5" />
      <path d="M4.5 6V4.5a2.5 2.5 0 015 0V6" />
    </svg>
  );
}

export function LinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <circle cx="3.5" cy="7" r="1.6" />
      <circle cx="10.5" cy="3.5" r="1.6" />
      <circle cx="10.5" cy="10.5" r="1.6" />
      <path d="M5 6.2l4-2M5 7.8l4 2" />
    </svg>
  );
}

export function AgentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <rect x="3" y="5.5" width="12" height="9" rx="2" />
      <path d="M9 5.5V3M7 10h.01M11 10h.01" strokeLinecap="round" />
    </svg>
  );
}
