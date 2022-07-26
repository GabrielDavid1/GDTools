/* React */
import React, { forwardRef } from 'react';

/* Types */
import { Config } from '../../../../types/Funcs';

/* Components */
import Div from './Div';
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
  return (   
    <Div
      className={String(Math.random())}
      ref={ref}
      bgColor={config?.bgColor}
      width={config?.width}
      height={config?.height}
      border={config?.pxBorder+' '+config?.typeBorder+' '+config?.colorBorder}
      boxShadowConverted={'0px 0px '+config?.boxShadow+'px'+' 0px'}
      borderRadius={config?.borderRadius}
      opacity={config?.opacity}
      zIndex={config?.zIndex}
      flexDirection={config?.flexDirection}
      flexWrap={config?.flexWrap}
      justifyContent={config?.justifyContent}
      alignItems={config?.alignItems}
      marginLeft={config?.marginLeft}
      marginRight={config?.marginRight}
      marginTop={config?.marginTop}
      marginBottom={config?.marginBottom}
      isScrollX={(config?.isScrollX !== undefined) && config?.isScrollX}
      isScrollY={(config?.isScrollY !== undefined) && config?.isScrollY}
      gap={config?.gap}
      position={config?.position}
      transform={"translate(0px, 0px)"}
      { ...rest} 
    > 
      {children}
    </Div>
  )
});