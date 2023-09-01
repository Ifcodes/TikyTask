import { SVGProps } from "react"

const BellIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#667085"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M7.795 17.5a3.32 3.32 0 0 0 2.205.833 3.32 3.32 0 0 0 2.205-.833M15 6.667a5 5 0 0 0-10 0c0 2.575-.65 4.338-1.375 5.504-.613.984-.919 1.476-.907 1.613.012.152.044.21.167.3.11.083.609.083 1.606.083h11.018c.997 0 1.495 0 1.606-.082.122-.091.155-.15.167-.301.011-.137-.295-.63-.907-1.613C15.65 11.005 15 9.241 15 6.667Z"
    />
  </svg>
)
export default BellIcon
