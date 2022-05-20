import React, { FC } from "react";
import { joinClasses } from "utils";

interface ILoading {
  fontSize?: number;
  onClick?: () => void;
  className?: string;
  height?: number | string;
  width?: number | string;
}
export const Loading: FC<ILoading> = ({
  fontSize,
  className,
  onClick,
  height,
  width,
}) => {
  return (
    <svg
      version="1.1"
      id="L9"
      viewBox="0 0 100 100"
      height={height ? height : `1em`}
      width={width ? width : "1em"}
      className={joinClasses("", className)}
      onClick={onClick}
      fontSize={fontSize}
    >
      <path
        d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
        fill="current"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="1s"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};
