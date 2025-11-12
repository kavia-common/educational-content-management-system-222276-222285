import { useAsync } from "./useAsync";
import { fetchLesson } from "../services/courses";

// PUBLIC_INTERFACE
export function useLesson(courseId, lessonId) {
  return useAsync(() => fetchLesson(courseId, lessonId), [courseId, lessonId]);
}
