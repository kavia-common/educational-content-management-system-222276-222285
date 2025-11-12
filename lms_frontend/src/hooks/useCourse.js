import { useAsync } from "./useAsync";
import { fetchCourse } from "../services/courses";

// PUBLIC_INTERFACE
export function useCourse(courseId) {
  return useAsync(() => fetchCourse(courseId), [courseId]);
}
