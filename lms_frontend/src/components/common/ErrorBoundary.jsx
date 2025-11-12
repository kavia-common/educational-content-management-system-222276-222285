import React from "react";

// PUBLIC_INTERFACE
export class ErrorBoundary extends React.Component {
  /** Error boundary for catching rendering errors in descendant components. */
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: String(error) };
  }

  componentDidCatch(error, info) {
    if (process.env.REACT_APP_LOG_LEVEL !== "silent") {
      // Guard logs by REACT_APP_LOG_LEVEL
      // eslint-disable-next-line no-console
      console.error("[ErrorBoundary]", error, info);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" style={{ padding: 24 }}>
          <h2>Something went wrong.</h2>
          <pre style={{ whiteSpace: "pre-wrap" }}>{this.state.error}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
