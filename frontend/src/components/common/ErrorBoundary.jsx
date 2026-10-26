import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container text-center py-5">

          <h1>Something went wrong.</h1>

          <p className="text-muted">
            Please refresh the page.
          </p>

        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;