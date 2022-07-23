/* React */
import React, { useState, useEffect, forwardRef } from 'react';

/* Tipagens */
import { Config } from '../../../../types/Funcs';

/* Componentes */
import Div from './Div';
import { Selection } from '../Selection';
const Draggable = require('react-draggable');

interface Props {
    id: string;
    width: string;
    height: string;
    refLeft:React.MutableRefObject<HTMLDivElement>;
    refTop:React.MutableRefObject<HTMLDivElement>; 
    refRight:React.MutableRefObject<HTMLDivElement>;
    refBottom:React.MutableRefObject<HTMLDivElement>; 
    config?: Config;
    estado: boolean;
    setEstado: React.Dispatch<React.SetStateAction<boolean>>;
}
// eslint-disable-next-line react/display-name
export const ElementDiv = forwardRef<HTMLDivElement,  Props>(( { 
   id, 
   width,
   height,
   refLeft, 
   refTop, 
   refRight, 
   refBottom,
   config,
   estado,
   setEstado,
}, ref ) => {
  const [visibilidade, setVisibilidade] = useState(false);

  return (
    <Draggable
      disabled={estado} 
     // onStop={setarTransform}
    //  defaultPosition={{x: config?.x, y: config?.y}}
    >   
      <div> 
        <Div 
          ref={ref} 
          className="resizeable" 
          onMouseOver={() => setVisibilidade(true)} 
          onMouseOut={() => setVisibilidade(false)}
        //  onClick={(e) => (statusEdicao) && trocarLateral(e.detail)}
          bgColor={config?.bgColor}
          width={config?.width}
          height={config?.height}
          border={config?.pxBorder+' '+config?.typeBorder+' '+config?.colorBorder}
          boxShadow={config?.boxShadow}
          borderRadius={config?.borderRadius}
          opacity={config?.opacity}
          zIndex={config?.zIndex}
          transform={"translate(0px, 0px)"}
        > 
          <Selection
              visibilidade={visibilidade}
              refLeft={refLeft} 
              refTop={refTop}
              refRight={refRight}
              refBottom={refBottom}
          />
        </Div>
      </div>
    </Draggable>
  )
});