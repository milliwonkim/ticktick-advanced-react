import React from "react";

interface CheckIconProps {
  fill?: string;
  width?: string;
  height?: string;
}

function CheckIcon({ fill, width, height }: CheckIconProps) {
  return (
    <svg
      fill={fill || "#000000"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 24 24`}
      width={width || "24px"}
      height={height || "24px"}
    >
      <path d="M 20.292969 5.2929688 L 9 16.585938 L 4.7070312 12.292969 L 3.2929688 13.707031 L 9 19.414062 L 21.707031 6.7070312 L 20.292969 5.2929688 z" />
    </svg>
  );
}

export default CheckIcon;
