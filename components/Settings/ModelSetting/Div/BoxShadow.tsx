//React
import React, { useState } from 'react';

export default function BoxShadow () {
 const [value, setValue] = useState<number>(0);
 
 return (
   <div className="boxShadow-area">
      <h2 onClick={() => console.log(value)}> Box Shadow </h2> 
      <select onChange={(e) => setValue(Number(e.target.value))}>
        <option value={0}>0%</option>
        <option value={1}>10%</option>
        <option value={5}>50%</option>
        <option value={10}>100%</option>
      </select>
   </div>
 )
}