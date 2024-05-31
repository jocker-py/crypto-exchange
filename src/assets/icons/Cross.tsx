import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#80A2B6"
      stroke="#80A2B6"
      d="M12.179 3.263 8 7.442 3.821 3.263l-.558.558L7.442 8l-4.179 4.179.558.558L8 8.558l4.179 4.179.558-.558L8.558 8l4.179-4.179-.558-.558Z"
    />
  </svg>
);
export { SvgComponent as Cross };
