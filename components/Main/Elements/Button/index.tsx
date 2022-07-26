//React
import React from "react";
import { Config } from "../../../../types/Funcs";

//Components
import { ButtonElement } from "./ButtonElement";

//Contexts
import { useFuncs } from "../../../../contexts/Functionalities";
interface Props {
  config:Config;
}

export default function ButtonView({
  config,
  ...rest
}: Props) {
  const { setOnToggle, setSelected } = useFuncs();
  return (
    <ButtonElement
      onClick={() => {
        setOnToggle(true);
        setSelected(config as Config);
      }}
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
