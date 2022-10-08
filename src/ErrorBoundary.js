import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.error("Unexpected exception", error);
    if (error && error.type === "missing") {
      return { hasError: "missing" };
    }
    return { hasError: "error" };
  }

  componentDidCatch(error, errorInfo) {}

  render() {
    if (this.state.hasError === "missing") {
      return <h1>Missing</h1>;
    } else if (this.state.hasError === "error") {
      return <h1>Something went wrong</h1>;
    }
    return this.props.children;
  }
}
