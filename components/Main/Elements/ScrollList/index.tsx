/* React */
import React, { useRef, useEffect } from "react";

/* Components */
import { ElementDiv } from "./ElementDiv";
import { SecondaryDiv } from "./SecondaryDiv";

/* Contexts */
import { useFuncs } from "../../../../contexts/Functionalities";

/* Types */
import { Config } from "../../../../types/Funcs";

// Utils
import changeSection from "../../../../utils/changeSection";

interface PropsComponentes {
  config: Config;
  children?: React.ReactNode;
}

export const ScrollListView = ({ config, children }: PropsComponentes) => {
  const ref = useRef<HTMLDivElement>({} as HTMLDivElement);

  const { funcs } = useFuncs();

  useEffect(() => {
    const ScrollList = ref.current;
    if (config) {
      ScrollList.style.width = `${config.width}`;
      ScrollList.style.height = `${config.height}`;
      ScrollList.style.borderRadius = `${config.borderRadius}`;
    }
  }, [funcs]);

  return (
    <ElementDiv ref={ref} config={config}>
      <SecondaryDiv 
        direction="vertical"
        onClick={() => changeSection(config as Config, true)}
      >
        {children}
      </SecondaryDiv>
    </ElementDiv>
  );
};
