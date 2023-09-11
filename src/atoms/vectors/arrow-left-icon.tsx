import * as React from "react";
import { SVGProps } from "react";
const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#475467"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M15.833 10H4.167m0 0L10 15.833M4.167 10 10 4.167"
    />
  </svg>
);
export default ArrowLeftIcon;
