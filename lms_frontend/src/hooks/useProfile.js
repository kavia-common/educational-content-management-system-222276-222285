import { useAsync } from "./useAsync";
import { fetchProfile } from "../services/user";

// PUBLIC_INTERFACE
export function useProfile() {
  return useAsync(fetchProfile, []);
}
