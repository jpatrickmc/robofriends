import React, { Component } from "react";

// useful for production apps
class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops. We ran into an issue.</h1>;
    }
    return this.props.children; // anything wrapped in the ErrorBoundary component
  }
}

export default ErrorBoundary;
