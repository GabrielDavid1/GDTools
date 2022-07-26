/* React */
import React from 'react';

//Contexts
import { useFuncs } from '../../../../contexts/Functionalities';

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
  const { setOnToggle, setSelected } = useFuncs();

  function handleChange () {
    setOnToggle(false);
    setSelected(config as Config);
  }

  return (   
    <> 
      <Text 
        onClick={handleChange}
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