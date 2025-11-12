import React from "react";
import "../layout/Layout.css";
import Button from "../common/Button";

// PUBLIC_INTERFACE
export default function Header({ theme, onToggleTheme }) {
  /** Header displaying brand, top navigation, and theme toggle */
  return (
    <header className="header" role="banner">
      <div className="brand" aria-label="LMS Home">
        <div className="brand-badge" aria-hidden="true" />
        <span>OceanLMS</span>
      </div>
      <nav aria-label="Primary">
        <ul style={{ listStyle: "none", display: "flex", gap: "16px", padding: 0, margin: 0 }}>
          <li><a href="/" aria-label="Courses">Courses</a></li>
          <li><a href="/account" aria-label="Account">Account</a></li>
        </ul>
      </nav>
      <div className="header-actions">
        <Button variant="ghost" onClick={onToggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </Button>
      </div>
    </header>
  );
}
