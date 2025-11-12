import { ENV } from "../config/env";
import { debugLog, errorLog } from "../config/devtools";

const BASE = ENV.API_BASE || "";

// PUBLIC_INTERFACE
export async function http(path, { method = "GET", headers = {}, body, signal } = {}) {
  /** Basic HTTP wrapper using fetch and AbortController */
  const controller = !signal ? new AbortController() : null;
  const usedSignal = signal || controller?.signal;

  const url = path.startsWith("http") ? path : `${BASE}${path}`;
  const opts = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    signal: usedSignal,
  };
  if (body !== undefined) {
    opts.body = typeof body === "string" ? body : JSON.stringify(body);
  }

  try {
    debugLog("[http] request", method, url);
    const res = await fetch(url, opts);
    const contentType = res.headers.get("content-type") || "";
    let data = null;
    if (contentType.includes("application/json")) {
      data = await res.json();
    } else {
      data = await res.text();
    }
    if (!res.ok) {
      const err = new Error(typeof data === "string" ? data : (data?.message || "Request failed"));
      err.status = res.status;
      throw err;
    }
    return data;
  } catch (e) {
    errorLog("[http] error", e);
    throw e;
  } finally {
    controller?.abort(); // best-effort cleanup; no-op if completed
  }
}
