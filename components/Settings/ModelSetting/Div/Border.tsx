//React
import React, { useState } from 'react';

export default function Border() {
    const [valuePx, setValuePx] = useState(0); 
    const [valueShadowBox, setValueShadowBox] = useState<number>(0);
    const [color, setColor] = useState<string>('#fff');

    function handleChange (event = {} as React.ChangeEvent<HTMLInputElement>, color = '#fff') {
        setColor(event.target.value); 
        event.preventDefault();
    }

    return (
      <div className="border-area">
        <h2> Border </h2>
        <div className="actions">
          <select onChange={(e) => setValuePx(Number(e.target.value))}>
            <option value={1}>1px</option>
            <option value={2}>2px</option>
            <option value={3}>3px</option>
            <option value={5}>5px</option>
          </select>

          <select onChange={(e) => setValueShadowBox(Number(e.target.value))}>
            <option value={0}>0%</option>
            <option value={1}>10%</option>
            <option value={5}>50%</option>
            <option value={10}>100%</option>
          </select>

          <input type="color" value={color} onChange={handleChange} /> 
        </div>
      </div>
    )
}