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
        bgColor={config?.bgColor}
        fontWeight={config?.fontWeight}
        fontFamily={config?.fontFamily}
        textAlign={config?.textAlign}
        marginLeft={config?.marginLeft}
        marginRight={config?.marginRight}
        marginTop={config?.marginTop}
        marginBottom={config?.marginBottom}
      >
        {config?.textContent}
      </Text>
    </>
  )
});