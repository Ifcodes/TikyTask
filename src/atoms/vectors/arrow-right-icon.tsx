import * as React from "react";
import { SVGProps } from "react";
const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.167 10h11.666m0 0L10 4.167M15.833 10 10 15.833"
    />
  </svg>
);
export default ArrowRightIcon;
