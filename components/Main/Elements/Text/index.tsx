/* React */
import React, { useRef, useEffect, useState } from "react";

/* Components */
import { ElementText } from "./ElementText";

/* Contexts */
import { useFuncs } from "../../../../contexts/Functionalities";

/* Types */
import { configText } from "../../../../types/Funcs";

interface PropsComponentes {
  dimensionNode: {
    width: number;
    height: number;
  }
}

export const TextView = ({ dimensionNode }: PropsComponentes) => {
  const ref = useRef<HTMLDivElement>({} as HTMLDivElement);
  const refLeft = useRef<HTMLDivElement>({} as HTMLDivElement);
  const refTop = useRef<HTMLDivElement>({} as HTMLDivElement);
  const refRight = useRef<HTMLDivElement>({} as HTMLDivElement);
  const refBottom = useRef<HTMLDivElement>({} as HTMLDivElement);

  const { funcs } = useFuncs(); 

  const [dimension, setDimension] = useState({ width: '150px', height: '150px' });                                         
  
  return (
      <ElementText 
        config={configText}
      />
  );
}