import { SVGProps } from "react";
const RecorderIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#3F5BF6" d="M9 5a3 3 0 1 1 6 0v7a3 3 0 1 1-6 0V5Z" />
    <path
      stroke="#3F5BF6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 10v2a7 7 0 0 1-7 7m-7-9v2a7 7 0 0 0 7 7m0 0v3m-4 0h8m-4-7a3 3 0 0 1-3-3V5a3 3 0 1 1 6 0v7a3 3 0 0 1-3 3Z"
    />
  </svg>
);
export default RecorderIcon;
