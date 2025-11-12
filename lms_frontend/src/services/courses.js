import { http } from "./http";

/** Placeholder endpoints. Replace with real API when backend is ready. */

// PUBLIC_INTERFACE
export async function fetchCourses() {
  try {
    return await http("/api/courses");
  } catch {
    // Fallback mock
    return [
      { id: "c1", title: "Intro to Oceanography", description: "Explore the blue planet.", lessons: [{ id: "l1", title: "Waves 101" }] },
      { id: "c2", title: "Professional Writing", description: "Write with clarity.", lessons: [{ id: "l1", title: "Concise style" }] },
    ];
  }
}

// PUBLIC_INTERFACE
export async function fetchCourse(courseId) {
  try {
    return await http(`/api/courses/${courseId}`);
  } catch {
    // Fallback mock
    if (courseId === "c1") {
      return { id: "c1", title: "Intro to Oceanography", description: "Explore the blue planet.", lessons: [{ id: "l1", title: "Waves 101", duration: 12 }] };
    }
    if (courseId === "c2") {
      return { id: "c2", title: "Professional Writing", description: "Write with clarity.", lessons: [{ id: "l1", title: "Concise style", duration: 9 }] };
    }
    return null;
  }
}

// PUBLIC_INTERFACE
export async function fetchLesson(courseId, lessonId) {
  try {
    return await http(`/api/courses/${courseId}/lessons/${lessonId}`);
  } catch {
    // Fallback mock
    return { id: lessonId, title: `Lesson ${lessonId}`, description: "Placeholder lesson", content: "Lesson content will appear here." };
  }
}
