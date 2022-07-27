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
      borderRadius={config?.borderRadius}
      marginLeft={config?.marginLeft}
      marginRight={config?.marginRight}
      marginTop={config?.marginTop}
      marginBottom={config?.marginBottom}
      flexDirection={config?.flexDirection}
      flexWrap={config?.flexWrap}
      justifyContent={config?.justifyContent}
      alignItems={config?.alignItems}
      position={config?.position}
      isScrollX={(config?.isScrollX !== undefined) && config?.isScrollX}
      isScrollY={(config?.isScrollY !== undefined) && config?.isScrollY}
      transform={"translate(0px, 0px)"}
      gap={config?.gap}
    > 
      {children}
    </Div>
  )
});