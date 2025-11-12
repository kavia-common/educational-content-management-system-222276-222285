import React from "react";
import "../layout/Layout.css";
import Button from "../common/Button";

// PUBLIC_INTERFACE
export default function Sidebar({ onSearch }) {
  /** Sidebar with search and filter placeholders */
  const [q, setQ] = React.useState("");

  return (
    <aside className="sidebar" aria-label="Sidebar course filters">
      <div className="search">
        <input
          type="search"
          placeholder="Search courses..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Search courses"
        />
        <Button onClick={() => onSearch?.(q)} aria-label="Search">Search</Button>
      </div>
      <div aria-live="polite" style={{ color: "var(--color-muted)", fontSize: 14 }}>
        Filters coming soon (category, level, tags).
      </div>
    </aside>
  );
}
