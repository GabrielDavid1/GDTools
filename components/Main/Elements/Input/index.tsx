//React
import React from "react";

//Component Styles
import { InputElement } from "./InputElement";

interface Props {
  color?: string;
  width?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
}

export default function InputView({
  color,
  width,
  height,
  border,
  borderRadius,
  ...rest
}: Props) {
  return (
    <InputElement
      {...rest}
      color={color}
      width={width}
      height={height}
      border={border}
      borderRadius={borderRadius}
    />
  );
}
