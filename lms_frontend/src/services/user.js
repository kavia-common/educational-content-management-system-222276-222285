import { http } from "./http";

// PUBLIC_INTERFACE
export async function fetchProfile() {
  try {
    return await http("/api/me");
  } catch {
    // Fallback mock
    return { id: "u1", name: "Alex Jensen", email: "alex@example.com", memberSince: "2021" };
  }
}
