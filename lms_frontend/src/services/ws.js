import { ENV } from "../config/env";

/**
// PUBLIC_INTERFACE
 * createWebSocket
 * Stub for future real-time features. Returns a closed WebSocket-like object for now.
 */
export function createWebSocket(path) {
  const endpoint = (ENV.WS_URL || "").replace(/\/$/, "");
  const url = path?.startsWith("ws") ? path : `${endpoint}${path || ""}`;
  return {
    url,
    readyState: 3, // CLOSED
    close: () => {},
  };
}
