/* React */
import React, { useRef, useEffect, useState } from "react";

/* Components */
import { ElementDiv } from "./ElementDiv";

/* Contexts */
import { useFuncs } from "../../../../contexts/Functionalities";

/* Types */
import { Config } from "../../../../types/Funcs";
interface Props {
  config: Config | undefined;
  children?: React.ReactNode;
}

export const DivView = ({ config, children }: Props) => {
  const ref = useRef<HTMLDivElement>({} as HTMLDivElement);
  const refLeft = useRef<HTMLDivElement>({} as HTMLDivElement);
  const refTop = useRef<HTMLDivElement>({} as HTMLDivElement);
  const refRight = useRef<HTMLDivElement>({} as HTMLDivElement);
  const refBottom = useRef<HTMLDivElement>({} as HTMLDivElement);

  const { funcs, setFuncs, editNodeConfig } = useFuncs();

  useEffect(() => {
    const div = ref.current;
    if (config) {
      div.style.width = `${config.width}`;
      div.style.height = `${config.height}`;
      div.style.borderRadius = `${config.borderRadius}`;
    }
  }, [funcs]);
  
  return (
      <ElementDiv 
        ref={ref} 
        refLeft={refLeft} 
        refTop={refTop}
        refRight={refRight}
        refBottom={refBottom}
        config={config}
      >
       {children}
      </ElementDiv>
  );
}