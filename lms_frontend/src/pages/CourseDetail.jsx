import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import EmptyState from "../components/common/EmptyState";
import Card from "../components/common/Card";
import { useCourse } from "../hooks/useCourse";
import Button from "../components/common/Button";

function Skeleton() {
  return (
    <div>
      <div style={{ height: 28, width: "40%", background: "var(--color-bg)", borderRadius: 8, marginBottom: 12 }} />
      <div style={{ height: 16, width: "70%", background: "var(--color-bg)", borderRadius: 8 }} />
    </div>
  );
}

// PUBLIC_INTERFACE
export default function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { data, loading, error, refetch } = useCourse(courseId);

  if (loading) return <Skeleton />;

  if (error) {
    return <EmptyState icon="⚠️" title="Failed to load course" description={String(error)} actionLabel="Retry" onAction={refetch} />;
  }

  if (!data) {
    return <EmptyState icon="❓" title="Course not found" description="This course may have been removed." actionLabel="Go back" onAction={() => navigate(-1)} />;
  }

  const lessons = data.lessons || [];

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <Button variant="ghost" onClick={() => navigate(-1)}>← Back</Button>
        <h2 style={{ margin: 0 }}>{data.title}</h2>
      </div>
      <p style={{ color: "var(--color-muted)" }}>{data.description}</p>
      <h3>Lessons</h3>
      {lessons.length === 0 ? (
        <EmptyState icon="📘" title="No lessons" description="Course has no lessons yet." />
      ) : (
        <div className="card-grid">
          {lessons.map((l) => (
            <Card key={l.id} title={l.title} subtitle={l.duration ? `${l.duration} min` : undefined}>
              <Link to={`/courses/${courseId}/lessons/${l.id}`}>Open lesson</Link>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
