/* React */
import React, { useState, useEffect, forwardRef } from 'react';

/* Types */
import { Config } from '../../../../types/Funcs';

/* Components */
import Div from './Div';
import { Selection } from '../Selection';
interface Props {
    width: string;
    height: string;
    refLeft:React.MutableRefObject<HTMLDivElement>;
    refTop:React.MutableRefObject<HTMLDivElement>; 
    refRight:React.MutableRefObject<HTMLDivElement>;
    refBottom:React.MutableRefObject<HTMLDivElement>; 
    config?: Config;
}
// eslint-disable-next-line react/display-name
export const ElementDiv = forwardRef<HTMLDivElement,  Props>(( { 
   width,
   height,
   refLeft, 
   refTop, 
   refRight, 
   refBottom,
   config,
}, ref ) => {
  const [visibility, setVisibility] = useState(false);
  return (   
    <Div 
      ref={ref} 
      className="resizeable" 
      onMouseOver={() => setVisibility(true)} 
      onMouseOut={() => setVisibility(false)}
    //   onClick={(e) => setEstado(false)}
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
          visibility={visibility}
          refLeft={refLeft} 
          refTop={refTop}
          refRight={refRight}
          refBottom={refBottom}
      />
    </Div>
  )
});