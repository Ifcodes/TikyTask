/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error: any = useRouteError();
  console.log({ error });

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1>Oops!</h1>
      <p>Sorry, something went wrong.</p>
      {error && (
        <pre className="text-red-600 mt-4">
          <i>Please contact support.</i>
        </pre>
      )}
    </div>
  );
};

export default ErrorPage;
