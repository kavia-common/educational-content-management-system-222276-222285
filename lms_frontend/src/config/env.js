const get = (key, fallback = "") => (process.env[key] ?? fallback);

// PUBLIC_INTERFACE
export const ENV = {
  /** Base URL for API calls. Prefers REACT_APP_API_BASE, falls back to REACT_APP_BACKEND_URL or same-origin. */
  API_BASE: get("REACT_APP_API_BASE", get("REACT_APP_BACKEND_URL", "")),
  WS_URL: get("REACT_APP_WS_URL", ""),
  FRONTEND_URL: get("REACT_APP_FRONTEND_URL", ""),
  NODE_ENV: get("REACT_APP_NODE_ENV", process.env.NODE_ENV || "development"),
  ENABLE_SOURCE_MAPS: get("REACT_APP_ENABLE_SOURCE_MAPS", "true") === "true",
  PORT: get("REACT_APP_PORT", "3000"),
  TRUST_PROXY: get("REACT_APP_TRUST_PROXY", "false") === "true",
  LOG_LEVEL: get("REACT_APP_LOG_LEVEL", "info"),
  HEALTHCHECK_PATH: get("REACT_APP_HEALTHCHECK_PATH", "/healthz"),
  FEATURE_FLAGS: get("REACT_APP_FEATURE_FLAGS", ""),
  EXPERIMENTS_ENABLED: get("REACT_APP_EXPERIMENTS_ENABLED", "false") === "true",
};
