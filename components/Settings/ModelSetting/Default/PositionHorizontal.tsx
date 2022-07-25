//React
import React, { useState } from 'react';

export default function PositionHorizontal () {
 const [value, setValue] = useState<string>('center');

 return (
   <div className="position-area">
      <h2> Position Horizontal </h2> 
      <select onChange={(e) => setValue(e.target.value)}>
        <option value="center">center</option>
        <option value="flex-start">left</option>
        <option value="flex-end">right</option>
      </select>
   </div>
 )
}