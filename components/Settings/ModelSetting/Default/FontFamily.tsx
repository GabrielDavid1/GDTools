//React
import React, { useState } from 'react';

export default function FontFamily () {
 const [value, setValue] = useState<string>('10px');
 
 return (
   <div className="fontFamily-area">
      <h2> Font Family </h2> 
      <select onChange={(e) => setValue(e.target.value)}>
        <option value="arial">Arial</option>
        <option value="monospace">Monospace</option>
        <option value="cursive">Cursive</option>
        <option value="roboto">Roboto</option>
      </select>
   </div>
 )
}