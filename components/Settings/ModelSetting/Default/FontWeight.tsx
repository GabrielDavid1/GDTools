//React
import React, { useState } from 'react';

export default function FontWeight () {
 const [value, setValue] = useState<number>(0);
 
 return (
   <div className="fontWeight-area">
      <h2> Font Weight </h2> 
      <select onChange={(e) => setValue(Number(e.target.value))}>
        <option value={0}>none</option>
        <option value={100}>100</option>
        <option value={200}>200</option>
        <option value={300}>300</option>
        <option value={400}>400</option>
        <option value={500}>500</option>
        <option value={600}>600</option>
        <option value={700}>700</option>
        <option value={800}>800</option>
        <option value={900}>900</option>
      </select>
   </div>
 )
}