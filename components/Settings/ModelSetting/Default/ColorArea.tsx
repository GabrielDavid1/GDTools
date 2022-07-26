/* Componente Framework react color */
import React, { useState } from 'react';

//Components
import { TwitterPicker } from 'react-color';
import { useFuncs } from '../../../../contexts/Functionalities';
import { Config } from '../../../../types/Funcs';
interface Props {
  config:Config | undefined;
}

export default function ColorArea ({config}:Props) {
  const [bgColor, setBgColor] = useState('#fff');

  const { funcs, setFuncs } = useFuncs();

  function handleChange (event = {} as React.ChangeEvent<HTMLInputElement>, color = '#fff') {
    setFuncs([...funcs]);
    event.preventDefault();
  }

  return (
    <div className="color-area">
      <TwitterPicker 
        width="100%"
        color={bgColor} 
        onChange={(updatedColor, e) => handleChange(e, updatedColor.hex)} 
      />
    </div>
  )
}