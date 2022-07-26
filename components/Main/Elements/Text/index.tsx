/* React */
import React from 'react';

/* Types */
import { Config } from '../../../../types/Funcs';

/* Components */
import Text from './Text';

interface Props {
  config?: Config;
}
// eslint-disable-next-line react/display-name
export const TextView = (({ 
   config,
}:Props) => {
  return (   
    <> 
      <Text 
        fontSize={config?.fontSize}
        color={config?.color}
        fontWeight={config?.fontWeight}
        fontFamily={config?.fontFamily}
        textAlign={config?.textAlign}
        border={config?.pxBorder+' '+config?.typeBorder+' '+config?.colorBorder}
      >
        {config?.textContent}
      </Text>
    </>
  )
});