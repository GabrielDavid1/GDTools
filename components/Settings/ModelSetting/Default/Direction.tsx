//React
import React, { useState } from 'react';

export default function Direction () {
 const [value, setValue] = useState<string>('10px');
 
 return (
   <div className="fontFamily-area">
      <h2> Direction </h2> 
      <select onChange={(e) => setValue(e.target.value)}>
        <option value="row">Horizontal</option>
        <option value="column">Vertical</option>
      </select>
   </div>
 )
}