/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../ErrorFallBack";

interface ErrorLayoutPropType {
  children: ReactNode;
  resetKeys?: string[];
  handleReset: () => void;
  handleErrorLog?: (error: any, info: any) => void;
}

const ErrorLayout = ({
  children,
  resetKeys,
  handleReset,
  handleErrorLog = () => {},
}: ErrorLayoutPropType) => {
  const handleLogError = (error: any, info: any) => {
    handleErrorLog(error, info);
    console.error({ error, info });
  };
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={handleReset}
      onError={handleLogError}
      resetKeys={resetKeys}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ErrorLayout;
