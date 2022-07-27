//React
import React from "react";
import { Config } from "../../../../types/Funcs";

//Components
import { ButtonElement } from "./ButtonElement";
interface Props {
  config:Config;
}

export default function ButtonView({
  config,
  ...rest
}: Props) {
  return (
    <ButtonElement
      width={`${config?.width}`}
      height={`${config?.height}`}
      border={config?.pxBorder+' '+config?.typeBorder+' '+config?.colorBorder}
      color={`${config?.color}`}
      bgColor={`${config?.bgColor}`}
      fontSize={config?.fontSize}
      marginLeft={config?.marginLeft}
      marginRight={config?.marginRight}
      marginTop={config?.marginTop}
      marginBottom={config?.marginBottom}
      {...rest}
    >
      {`${config?.textContent}`}
    </ButtonElement>
  );
}
