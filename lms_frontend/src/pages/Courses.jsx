import React from "react";
import Card from "../components/common/Card";
import EmptyState from "../components/common/EmptyState";
import { useCourses } from "../hooks/useCourses";
import { useNavigate } from "react-router-dom";

function SkeletonCard() {
  return (
    <div style={{
      background: "var(--color-surface)",
      border: "1px solid var(--color-border)",
      borderRadius: "14px",
      padding: "16px"
    }}>
      <div style={{ height: 20, width: "60%", background: "var(--color-bg)", borderRadius: 8, marginBottom: 8 }} />
      <div style={{ height: 14, width: "40%", background: "var(--color-bg)", borderRadius: 8 }} />
    </div>
  );
}

// PUBLIC_INTERFACE
export default function Courses() {
  const navigate = useNavigate();
  const { data, loading, error, refetch } = useCourses();

  if (loading) {
    return (
      <div className="card-grid">
        {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
      </div>
    );
  }

  if (error) {
    return <EmptyState icon="⚠️" title="Failed to load courses" description={String(error)} actionLabel="Retry" onAction={refetch} />;
  }

  if (!data || data.length === 0) {
    return <EmptyState icon="🎓" title="No courses yet" description="Please check back later." />;
  }

  return (
    <div className="card-grid">
      {data.map((c) => (
        <Card
          key={c.id}
          title={c.title}
          subtitle={c.subtitle || c.description}
          onClick={() => navigate(`/courses/${c.id}`)}
        >
          <div style={{ fontSize: 12, color: "var(--color-muted)" }}>
            Lessons: {c.lessonsCount ?? c.lessons?.length ?? 0}
          </div>
        </Card>
      ))}
    </div>
  );
}
