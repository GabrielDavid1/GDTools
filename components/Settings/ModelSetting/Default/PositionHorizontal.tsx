//React
import React from 'react';

//Components
import { useFuncs } from '../../../../contexts/Functionalities';

export default function PositionHorizontal () {
 const { funcs, setFuncs, selected } = useFuncs();

 function handleChange (e = {} as React.ChangeEvent<HTMLSelectElement>) {
    if (selected.config !== undefined) {
        selected.config.justifyContent = e.target.value;
    }
    setFuncs([...funcs]);
    e.preventDefault();
 }

 return (
   <div className="position-area">
      <h2> Position Horizontal </h2> 
      <select onChange={(e) => handleChange(e)}>
        <option value="center">center</option>
        <option value="flex-start">left</option>
        <option value="flex-end">right</option>
      </select>
   </div>
 )
}