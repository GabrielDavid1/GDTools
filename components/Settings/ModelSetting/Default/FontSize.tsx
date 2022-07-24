//React
import React, { useState } from 'react';

export default function FontSize () {
 const [value, setValue] = useState<number>(0);

 return (
   <div className="fontSize-area">
      <h2> Font Size </h2> 
      <select onChange={(e) => setValue(Number(e.target.value))}>
        <option value="10px">10px</option>
        <option value="12px">12px</option>
        <option value="16px">16px</option>
        <option value="18px">18px</option>
        <option value="20px">20px</option>
        <option value="24px">24px</option>
        <option value="28px">28px</option>
        <option value="32px">32px</option>
        <option value="36px">36px</option>
        <option value="40px">40px</option>
      </select>
   </div>
 )
}