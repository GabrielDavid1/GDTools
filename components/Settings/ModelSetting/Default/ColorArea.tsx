/* Componente Framework react color */
import React from 'react';

//Components
import { TwitterPicker } from 'react-color';
import { useFuncs } from '../../../../contexts/Functionalities';

export default function ColorArea () {
  const { funcs, setFuncs, selected } = useFuncs();

  function handleChange (event = {} as React.ChangeEvent<HTMLInputElement>, color = '#fff') {
    if (selected.config !== undefined) {
        selected.config.bgColor = color;
    }
    setFuncs([...funcs]);
    event.preventDefault();
  }

  return (
    <div className="color-area">
      <TwitterPicker 
        width="100%"
        color={selected?.config?.bgColor} 
        onChange={(updatedColor, e) => handleChange(e, updatedColor.hex)} 
      />
    </div>
  )
}