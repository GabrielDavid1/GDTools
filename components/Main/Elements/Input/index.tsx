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
      color={`${config?.color}`}
      bgColor={`${config?.bgColor}`}
      width={config?.width}
      height={config?.height}
      border={config?.pxBorder+' '+config?.typeBorder+' '+config?.colorBorder}
      borderRadius={config?.borderRadius}
      fontSize={config?.fontSize}
      fontWeight={config?.fontWeight}
      fontFamily={config?.fontFamily}
      marginLeft={config?.marginLeft}
      marginRight={config?.marginRight}
      marginTop={config?.marginTop}
      marginBottom={config?.marginBottom}
      placeholder={config?.textContent}
      {...rest}
    />
  );
}
