import React from "react";

// PUBLIC_INTERFACE
export default function Card({ title, subtitle, children, onClick }) {
  const style = {
    background: "var(--color-surface)",
    border: "1px solid var(--color-border)",
    borderRadius: "14px",
    padding: "16px",
    boxShadow: "var(--shadow-md)",
    transition: "transform var(--transition), box-shadow var(--transition)",
    cursor: onClick ? "pointer" : "default",
  };
  const hover = onClick ? { transform: "translateY(-2px)", boxShadow: "var(--shadow-lg)" } : {};
  const [isHover, setIsHover] = React.useState(false);

  return (
    <div
      style={{ ...style, ...(isHover ? hover : {}) }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {title && <h3 style={{ margin: "0 0 6px 0" }}>{title}</h3>}
      {subtitle && <p style={{ margin: "0 0 12px 0", color: "var(--color-muted)" }}>{subtitle}</p>}
      {children}
    </div>
  );
}
