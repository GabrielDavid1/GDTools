//React
import React from "react";

//Contexts
import { useFuncs } from "../../../../contexts/Functionalities";

//Types
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

  function ChangeSection() {
    const { setOnToggle, setSelected } = useFuncs();
    setOnToggle(true);
    setSelected(config as Config);
  }

  return (
    <ButtonElement
      onClick={() => ChangeSection()}
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
