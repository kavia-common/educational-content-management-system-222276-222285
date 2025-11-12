import { ENV } from "./env";

// PUBLIC_INTERFACE
export function debugLog(...args) {
  /** Guarded console.log honoring REACT_APP_LOG_LEVEL */
  if (ENV.LOG_LEVEL === "debug") {
    // eslint-disable-next-line no-console
    console.log(...args);
  }
}

// PUBLIC_INTERFACE
export function infoLog(...args) {
  if (ENV.LOG_LEVEL === "debug" || ENV.LOG_LEVEL === "info") {
    // eslint-disable-next-line no-console
    console.info(...args);
  }
}

// PUBLIC_INTERFACE
export function warnLog(...args) {
  if (ENV.LOG_LEVEL !== "silent") {
    // eslint-disable-next-line no-console
    console.warn(...args);
  }
}

// PUBLIC_INTERFACE
export function errorLog(...args) {
  if (ENV.LOG_LEVEL !== "silent") {
    // eslint-disable-next-line no-console
    console.error(...args);
  }
}
