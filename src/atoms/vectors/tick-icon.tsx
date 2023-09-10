import { SVGProps } from "react";
const TickIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path
      stroke="#3F5BF6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.667 3.5 5.25 9.917 2.333 7"
    />
  </svg>
);
export default TickIcon;
