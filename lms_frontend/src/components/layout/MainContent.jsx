import React from "react";
import "../layout/Layout.css";

// PUBLIC_INTERFACE
export default function MainContent({ children }) {
  /** Main content region */
  return (
    <main className="main" role="main">
      {children}
    </main>
  );
}
