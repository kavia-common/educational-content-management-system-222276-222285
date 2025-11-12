import React from "react";
import { useProfile } from "../hooks/useProfile";
import EmptyState from "../components/common/EmptyState";

// PUBLIC_INTERFACE
export default function Account() {
  const { data, loading, error, refetch } = useProfile();

  if (loading) {
    return (
      <div>
        <div style={{ height: 24, width: "40%", background: "var(--color-bg)", borderRadius: 8, marginBottom: 12 }} />
        <div style={{ height: 16, width: "60%", background: "var(--color-bg)", borderRadius: 8 }} />
      </div>
    );
  }

  if (error) {
    return <EmptyState icon="⚠️" title="Failed to load account" description={String(error)} actionLabel="Retry" onAction={refetch} />;
  }

  if (!data) {
    return <EmptyState icon="👤" title="No profile" description="Please sign in to manage your account." />;
  }

  return (
    <div style={{
      background: "var(--color-surface)",
      border: "1px solid var(--color-border)",
      borderRadius: "14px",
      padding: 16,
      boxShadow: "var(--shadow-md)"
    }}>
      <h2 style={{ marginTop: 0 }}>Account</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p style={{ color: "var(--color-muted)" }}>Member since {data.memberSince || "—"}</p>
    </div>
  );
}
