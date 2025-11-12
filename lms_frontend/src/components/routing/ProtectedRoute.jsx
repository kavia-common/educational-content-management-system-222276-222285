import React from "react";
import { Navigate, Outlet } from "react-router-dom";

/**
// PUBLIC_INTERFACE
 * ProtectedRoute
 * A minimal stub that always allows access for now.
 * Extend with authentication logic later (e.g., check token or profile).
 */
export default function ProtectedRoute({ isAuthed = true, redirectTo = "/" }) {
  if (!isAuthed) {
    return <Navigate to={redirectTo} replace />;
  }
  return <Outlet />;
}
