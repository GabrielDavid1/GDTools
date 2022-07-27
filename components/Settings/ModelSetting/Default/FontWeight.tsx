//React
import React from 'react';

//Contexts
import { useFuncs } from '../../../../contexts/Functionalities';

export default function FontWeight () {
 const { funcs, setFuncs, selected } = useFuncs();

 function handleChange (e = {} as React.ChangeEvent<HTMLSelectElement>) {
     if (selected.config !== undefined) {
         selected.config.fontWeight = e.target.value;
     }
     setFuncs([...funcs]);
     e.preventDefault();
 }

 return (
   <div className="fontWeight-area">
      <h2> Font Weight </h2> 
      <select onChange={(e) => handleChange(e)}>
        <option value={0}>none</option>
        <option value={100}>100</option>
        <option value={200}>200</option>
        <option value={300}>300</option>
        <option value={400}>400</option>
        <option value={500}>500</option>
        <option value={600}>600</option>
        <option value={700}>700</option>
        <option value={800}>800</option>
        <option value={900}>Bold</option>
      </select>
   </div>
 )
}