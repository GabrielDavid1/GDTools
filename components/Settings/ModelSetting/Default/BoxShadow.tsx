//React
import React, { useState } from 'react';

//Contexts
import { useFuncs } from '../../../../contexts/Functionalities';

export default function BoxShadow () {
 const [value, setValue] = useState<number>(0);
 const { funcs, setFuncs, selected } = useFuncs();

 function handleChange (e = {} as React.ChangeEvent<HTMLSelectElement>) {
    const valueAll = Number(e.target.value); 
    setValue(valueAll);
    if (selected.config !== undefined) {
      selected.config.boxShadow = valueAll;
    }
    setFuncs([...funcs]);
    e.preventDefault();
 }

 return (
   <div className="boxShadow-area">
      <h2> Box Shadow </h2> 
      <select onChange={(e) => handleChange(e)}>
        <option value={0}>0%</option>
        <option value={1}>10%</option>
        <option value={5}>50%</option>
        <option value={10}>100%</option>
      </select>
   </div>
 )
}