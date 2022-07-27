/* React */
import React, { useRef, useEffect } from "react";

/* Components */
import { ElementDiv } from "./ElementDiv";
import { SecondaryDiv } from "./SecondaryDiv";

/* Contexts */
import { useFuncs } from "../../../../contexts/Functionalities";

/* Types */
import { Config } from "../../../../types/Funcs";

interface PropsComponentes {
  config: Config;
  children?: React.ReactNode;
}

export const ScrollListView = ({ config, children }: PropsComponentes) => {
  const { funcs } = useFuncs();
  const ref = useRef<HTMLDivElement>({} as HTMLDivElement);

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
      <SecondaryDiv direction={(config?.isScrollX) ? 'horizontal' : 'vertical'}>
        {children}
      </SecondaryDiv>
    </ElementDiv>
  );
};
