import React from "react";
import EmptyState from "../components/common/EmptyState";

// PUBLIC_INTERFACE
export default function NotFound() {
  return <EmptyState icon="🔎" title="Page not found" description="The page you are looking for does not exist." />;
}
