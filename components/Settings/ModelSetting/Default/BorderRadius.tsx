//React
import React, { useState } from 'react';

export default function BorderRadius () {
 const [value, setValue] = useState<number>(0);

 function handleChange (e = {} as React.ChangeEvent<HTMLSelectElement>) {
    setValue(Number(e.target.value));
    e.preventDefault();
 }

 return (
   <div className="boxShadow-area">
      <h2> Border Radius </h2> 
      <select onChange={(e) => handleChange(e)}>
        <option value={0}>0px</option>
        <option value={1}>1px</option>
        <option value={2}>2px</option>
        <option value={3}>3px</option>
        <option value={4}>4px</option>
        <option value={5}>5px</option>
        <option value={10}>1px</option> 
        <option value={20}>20px</option>
        <option value={30}>30px</option>
        <option value={50}>50px</option>
        <option value={100}>10px</option>
      </select>
   </div>
 )
}