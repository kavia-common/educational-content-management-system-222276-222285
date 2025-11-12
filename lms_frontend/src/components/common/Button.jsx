import React from "react";

/** Variants: primary, secondary, ghost */
// PUBLIC_INTERFACE
export default function Button({ children, variant = "primary", ...props }) {
  const base = {
    padding: "10px 14px",
    borderRadius: "10px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all var(--transition)",
    border: "1px solid transparent",
    boxShadow: "var(--shadow-sm)",
    background: "var(--color-primary)",
    color: "#fff",
  };
  const variants = {
    primary: base,
    secondary: {
      ...base,
      background: "var(--color-secondary)",
    },
    ghost: {
      ...base,
      background: "transparent",
      color: "var(--color-text)",
      border: "1px solid var(--color-border)",
      boxShadow: "none",
    },
  };
  const style = variants[variant] || base;

  return (
    <button style={style} {...props}>
      {children}
    </button>
  );
}
