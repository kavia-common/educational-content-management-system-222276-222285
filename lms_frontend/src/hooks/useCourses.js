import { useAsync } from "./useAsync";
import { fetchCourses } from "../services/courses";

// PUBLIC_INTERFACE
export function useCourses() {
  return useAsync(fetchCourses, []);
}
