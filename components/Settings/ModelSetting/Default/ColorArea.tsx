/* Componente Framework react color */
import React, { useState } from 'react';
import { TwitterPicker } from 'react-color';

export default function ColorArea () {
  const [bgColor, setBgColor] = useState('#fff');

  function handleChange (event = {} as React.ChangeEvent<HTMLInputElement>, color = '#fff') {
    setBgColor(color); 
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