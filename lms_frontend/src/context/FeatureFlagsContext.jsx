import React from "react";
import { ENV } from "../config/env";

const FeatureFlagsContext = React.createContext({});

// PUBLIC_INTERFACE
export function FeatureFlagsProvider({ children }) {
  const flags = React.useMemo(() => {
    const raw = (ENV.FEATURE_FLAGS || "").split(",").map((s) => s.trim()).filter(Boolean);
    const obj = {};
    raw.forEach((f) => { obj[f] = true; });
    return obj;
  }, []);

  return (
    <FeatureFlagsContext.Provider value={flags}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}

// PUBLIC_INTERFACE
export function useFeatureFlags() {
  return React.useContext(FeatureFlagsContext);
}

export default FeatureFlagsContext;
