import React from "react";

// PUBLIC_INTERFACE
export function useAsync(asyncFn, deps = []) {
  /**
   * Generic async hook to load data with loading/error state and refetch support.
   */
  const [state, setState] = React.useState({ loading: true, error: null, data: null });

  const run = React.useCallback(async () => {
    setState((s) => ({ ...s, loading: true, error: null }));
    try {
      const data = await asyncFn();
      setState({ loading: false, error: null, data });
    } catch (e) {
      setState({ loading: false, error: e, data: null });
    }
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    run();
  }, [run]);

  return { ...state, refetch: run };
}
