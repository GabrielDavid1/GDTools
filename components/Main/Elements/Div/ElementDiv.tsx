/* React */
import React, { useState, forwardRef } from 'react';

/* Types */
import { Config } from '../../../../types/Funcs';

/* Components */
import Div from './Div';
import { Selection } from '../Selection';

//Contexts
import { useFuncs } from '../../../../contexts/Functionalities';
interface Props {
    refLeft:React.MutableRefObject<HTMLDivElement>;
    refTop:React.MutableRefObject<HTMLDivElement>; 
    refRight:React.MutableRefObject<HTMLDivElement>;
    refBottom:React.MutableRefObject<HTMLDivElement>; 
    config?: Config;
    children?: React.ReactNode;
}
// eslint-disable-next-line react/display-name
export const ElementDiv = forwardRef<HTMLDivElement,  Props>(( { 
   refLeft, 
   refTop, 
   refRight, 
   refBottom,
   config,
   children,
   ...rest
}, ref ) => {
  const {setOnToggle, setSelected} = useFuncs();
  const [visibility, setVisibility] = useState(false);
  return (   
    <Div 
      ref={ref}
      onClick={() => {
        setOnToggle(true);
        setSelected(config as Config);
      }}
      onMouseOver={() => setVisibility(true)} 
      onMouseOut={() => setVisibility(false)}
      bgColor={config?.bgColor}
      width={config?.width}
      height={config?.height}
      border={config?.pxBorder+' '+config?.typeBorder+' '+config?.colorBorder}
      boxShadow={config?.boxShadow}
      borderRadius={config?.borderRadius}
      opacity={config?.opacity}
      zIndex={config?.zIndex}
      flexDirection={config?.flexDirection}
      flexWrap={config?.flexWrap}
      justifyContent={config?.justifyContent}
      alignItems={config?.alignItems}
      transform={"translate(0px, 0px)"}
      { ...rest} 
    > 
      {children}
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