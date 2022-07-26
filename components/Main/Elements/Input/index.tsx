//React
import React from "react";

//Component Styles
import { InputElement } from "./InputElement";

//Types
import { Config } from "../../../../types/Funcs";
interface Props {
  config: Config;
  children?: React.ReactNode;
}

export default function InputView({
  config,
  children,
  ...rest
}: Props) {
  return (
    <InputElement
      {...rest}
      color={`${config?.color}`}
      bgColor={`${config?.bgColor}`}
      width={config?.width}
      height={config?.height}
      border={config?.pxBorder+' '+config?.typeBorder+' '+config?.colorBorder}
      borderRadius={config?.borderRadius}
    />
  );
}
