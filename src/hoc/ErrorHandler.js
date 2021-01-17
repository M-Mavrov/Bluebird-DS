import React from "react";
import { ErrorBoundary } from "react-error-boundary";
function ErrorHandler({ children }) {
  const errorFallback = () => {
    return (
      <div
        style={{
          width: "100%",
          padding: "150px 0",
          textAlign: "center",
        }}
      >
        <h1> Something went wrong ! </h1>
        <p> Please reset the page and if the problem persists, contact us! </p>
      </div>
    );
  };
  return (
    <ErrorBoundary FallbackComponent={errorFallback}>{children}</ErrorBoundary>
  );
}

export default ErrorHandler;
