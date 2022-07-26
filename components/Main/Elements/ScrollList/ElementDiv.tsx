/* React */
import React, { forwardRef } from 'react';

/* Types */
import { Config } from '../../../../types/Funcs';

/* Components */
import Div from './Div';

interface Props {
    config?: Config;
    children?: React.ReactNode;
}
// eslint-disable-next-line react/display-name
export const ElementDiv = forwardRef<HTMLDivElement,  Props>(( { 
   config,
   children,
}, ref ) => {

  return (   
    <Div 
      ref={ref} 
      bgColor={config?.bgColor}
      width={config?.width}
      height={config?.height}
      border={config?.pxBorder+' '+config?.typeBorder+' '+config?.colorBorder}
      borderRadius={config?.borderRadius}
      opacity={config?.opacity}
      zIndex={config?.zIndex}
      flexDirection={config?.flexDirection}
      flexWrap={config?.flexWrap}
      justifyContent={config?.justifyContent}
      alignItems={config?.alignItems}
      transform={"translate(0px, 0px)"}
      isScrollX={(config?.isScrollX !== undefined) && config?.isScrollX}
      isScrollY={(config?.isScrollY !== undefined) && config?.isScrollY}
    > 
      {children}
    </Div>
  )
});