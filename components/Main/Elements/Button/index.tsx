//React
import React from "react";
import { Config } from "../../../../types/Funcs";

//Components
import { ButtonElement } from "./ButtonElement";

//Utils
import ChangeSection from "../../../../utils/changeSection";
interface Props {
  config:Config;
}

export default function ButtonView({
  config,
  ...rest
}: Props) {
  return (
    <ButtonElement
      onClick={() => ChangeSection(config as Config, true)}
      width={`${config?.width}`}
      height={`${config?.height}`}
      boxShadow={(config?.boxShadow !== undefined) ? config.boxShadow : 0}
      border={config?.pxBorder+' '+config?.typeBorder+' '+config?.colorBorder}
      color={`${config?.color}`}
      bgColor={`${config?.bgColor}`}
      {...rest}
    >
      {`${config?.textContent}`}
    </ButtonElement>
  );
}
