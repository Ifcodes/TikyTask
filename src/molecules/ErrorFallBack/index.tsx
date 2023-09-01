/* eslint-disable @typescript-eslint/no-explicit-any */

interface ErrorFallbackPropType {
  error: any;
  resetErrorBoundary: () => void;
}
const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: ErrorFallbackPropType) => {
  return (
    <div role="alert">
      <p>Oops! Something went wrong</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export default ErrorFallback;
