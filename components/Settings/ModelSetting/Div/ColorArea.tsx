/* Componente Framework react color */
import React, { useState } from 'react';
import { TwitterPicker } from 'react-color';

export default function ColorArea () {
  const [bgColor, setBgColor] = useState('#fff');
  function mudarPropriedades (event = {} as React.ChangeEvent<HTMLInputElement>, color = '#fff') {
    setBgColor(color); 
    event.preventDefault();
  }
  return (
    <div className="color-area">
      <h2> Color </h2>
      <TwitterPicker 
        width="100%"
        color={bgColor} 
        onChange={(updatedColor, e) => mudarPropriedades(e, updatedColor.hex)} 
      />
    </div>
  )
}