import React from "react";
import Button from "./Button";

// PUBLIC_INTERFACE
export default function EmptyState({ icon = "📦", title = "Nothing here", description = "No data to display.", actionLabel, onAction }) {
  return (
    <div
      style={{
        background: "var(--color-surface)",
        border: "1px dashed var(--color-border)",
        borderRadius: "14px",
        padding: 24,
        textAlign: "center",
        color: "var(--color-muted)"
      }}
      role="status"
      aria-live="polite"
    >
      <div style={{ fontSize: 28, marginBottom: 8 }} aria-hidden="true">{icon}</div>
      <h3 style={{ margin: "0 0 6px 0", color: "var(--color-text)" }}>{title}</h3>
      <p style={{ margin: "0 0 12px 0" }}>{description}</p>
      {actionLabel && <Button onClick={onAction}>{actionLabel}</Button>}
    </div>
  );
}
