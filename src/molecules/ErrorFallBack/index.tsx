/* eslint-disable @typescript-eslint/no-explicit-any */

import Button from "../../atoms/Buttons/Button";

interface ErrorFallbackPropType {
  errorMessage: string;
  cta: () => void;
}
const ErrorFallback = ({ errorMessage, cta }: ErrorFallbackPropType) => {
  return (
    <div
      role="alert"
      className=" h-72 flex flex-col items-center space-y-3 justify-center"
    >
      <img src="/images/TodoLogo.svg" className="logo" />
      <pre style={{ color: "red" }}>{errorMessage}</pre>

      <Button className="w-32" onClick={cta}>
        Try again
      </Button>
    </div>
  );
};

export default ErrorFallback;
