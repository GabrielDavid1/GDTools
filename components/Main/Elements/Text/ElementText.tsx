/* React */
import React, { useState, useEffect, forwardRef } from 'react';

/* Types */
import { Config } from '../../../../types/Funcs';

/* Components */
import Text from './Text';

interface Props {
  config?: Config;
}
// eslint-disable-next-line react/display-name
export const ElementText = forwardRef<HTMLDivElement,  Props>(( { 
   config,
}, ref ) => {
  const [visibility, setVisibility] = useState(false);

  return (   
    <> 
      <Text
        fontSize={config?.fontSize}
        color={config?.color}
        fontWeight={config?.fontWeight}
        fontFamily={config?.fontFamily}
        textAlign={config?.textAlign}
        isActive={visibility}
      >
        {config?.textContent}
      </Text>
    </>
  )
});