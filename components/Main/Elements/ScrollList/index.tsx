/* React */
import React, { useRef, useEffect, useState } from "react";

/* Components */
import { ElementDiv } from "./ElementDiv";

/* Contexts */
import { useFuncs } from "../../../../contexts/Functionalities";

/* Types */
import { config } from "../../../../types/Funcs";
import { SecondaryDiv } from "./SecondaryDiv";
interface PropsComponentes {
  children?: React.ReactNode;
}

export const ScrollListView = ({children }: PropsComponentes) => {
  const ref = useRef<HTMLDivElement>({} as HTMLDivElement);
  const refLeft = useRef<HTMLDivElement>({} as HTMLDivElement);
  const refTop = useRef<HTMLDivElement>({} as HTMLDivElement);
  const refRight = useRef<HTMLDivElement>({} as HTMLDivElement);
  const refBottom = useRef<HTMLDivElement>({} as HTMLDivElement);

  const { funcs } = useFuncs(); 

  const [dimension, setDimension] = useState({ width: '150px', height: '150px' });                                         

  useEffect(() => {
    if (config?.width !== undefined && config?.height !== undefined) {
      setDimension({...dimension,  width: config?.width, height: config?.height});
    } 
    const resizeableEle2 = ref.current;
    if (config) {
      resizeableEle2.style.width = `${config.width}`;
      resizeableEle2.style.height = `${config.height}`;
      resizeableEle2.style.borderRadius = `${config.borderRadius}`;
    }
  }, [funcs]);
  
  return (
      <ElementDiv 
        width={dimension.width}
        height={dimension.height}
        ref={ref} 
        refLeft={refLeft} 
        refTop={refTop}
        refRight={refRight}
        refBottom={refBottom}
        config={config}
      >
       <SecondaryDiv direction="vertical">
        {children}
       </SecondaryDiv>
      </ElementDiv>
  );
}