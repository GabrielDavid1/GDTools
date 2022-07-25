//React
import React, { useState } from 'react';

export default function PositionVertical () {
  const [value, setValue] = useState<string>('center');

 return (
   <div className="position-area">
      <h2> Position Vertical </h2> 
      <select onChange={(e) => setValue(e.target.value)}>
        <option value="center">center</option>
        <option value="flex-end">top</option>
        <option value="flex-start">bottom</option>
      </select>
   </div>
 )
}