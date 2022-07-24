//React
import React, { useState } from 'react';

export default function Position () {
 const [value, setValue] = useState<string>('');

 return (
   <div className="position-area">
      <h2> Position </h2> 
      <select onChange={(e) => setValue(e.target.value)}>
        <option value="absolute">absolute</option>
        <option value="fixed">fixed</option>
        <option value="inherit">inherit</option>
        <option value="relative">relative</option>
        <option value="revert">revert</option>
        <option value="static">static</option>
        <option value="sticky">sticky</option>
        <option value="unset">unset</option>
      </select>
   </div>
 )
}