import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLesson } from "../hooks/useLesson";
import EmptyState from "../components/common/EmptyState";
import Button from "../components/common/Button";

function Skeleton() {
  return (
    <div>
      <div style={{ height: 24, width: "50%", background: "var(--color-bg)", borderRadius: 8, marginBottom: 10 }} />
      <div style={{ height: 16, width: "80%", background: "var(--color-bg)", borderRadius: 8 }} />
    </div>
  );
}

// PUBLIC_INTERFACE
export default function LessonViewer() {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();
  const { data, loading, error, refetch } = useLesson(courseId, lessonId);

  if (loading) return <Skeleton />;
  if (error) return <EmptyState icon="⚠️" title="Failed to load lesson" description={String(error)} actionLabel="Retry" onAction={refetch} />;
  if (!data) return <EmptyState icon="❓" title="Lesson not found" description="Try a different lesson." actionLabel="Back" onAction={() => navigate(-1)} />;

  return (
    <article>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <Button variant="ghost" onClick={() => navigate(-1)}>← Back</Button>
        <h2 style={{ margin: 0 }}>{data.title}</h2>
      </div>
      <p style={{ color: "var(--color-muted)" }}>{data.description}</p>
      <div style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "14px",
        padding: 16
      }}>
        {data.content ? (
          <div>{data.content}</div>
        ) : (
          <EmptyState icon="📝" title="No content" description="This lesson has no content yet." />
        )}
      </div>
    </article>
  );
}
