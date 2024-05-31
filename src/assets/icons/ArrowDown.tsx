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
      d="M8.01 11a.852.852 0 0 0 .599-.254l4.137-4.236a.894.894 0 0 0 .003-1.25.853.853 0 0 0-.61-.26.853.853 0 0 0-.61.257L8 8.871 4.472 5.257A.862.862 0 0 0 3.86 5a.846.846 0 0 0-.61.26.885.885 0 0 0-.251.625.902.902 0 0 0 .254.625l4.137 4.236a.86.86 0 0 0 .62.254Z"
    />
  </svg>
);
export { SvgComponent as ArrowDown };
