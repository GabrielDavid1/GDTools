//React
import React from "react";

//Component Styles
import { InputElement } from "./InputElement";

//Types
import { Config } from "../../../../types/Funcs";

//Contexts
import { useFuncs } from "../../../../contexts/Functionalities";
interface Props {
  config: Config;
  children?: React.ReactNode;
}

export default function InputView({
  config,
  children,
  ...rest
}: Props) {
  const {setOnToggle, setSelected} = useFuncs();
  return (
    <InputElement
      onClick={() => {
        setOnToggle(true);
        setSelected(config as Config);
      }}
      color={`${config?.color}`}
      bgColor={`${config?.bgColor}`}
      width={config?.width}
      height={config?.height}
      border={config?.pxBorder+' '+config?.typeBorder+' '+config?.colorBorder}
      borderRadius={config?.borderRadius}
      {...rest}
    />
  );
}
