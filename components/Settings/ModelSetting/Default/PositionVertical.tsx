//React
import React from 'react';

//Contexts
import { useFuncs } from '../../../../contexts/Functionalities';

export default function PositionVertical () {
 const { funcs, setFuncs, selected } = useFuncs();

 function handleChange (e = {} as React.ChangeEvent<HTMLSelectElement>) {
    if (selected.config !== undefined) {
        const oldFunc = JSON.stringify(selected);
        const newFunc = JSON.parse(oldFunc);
        newFunc.config.alignItems = e.target.value;
        selected.config = newFunc.config;
        setFuncs([...funcs]);   
    }
    e.preventDefault();
 }

 return (
   <div className="position-area">
      <h2> Position Vertical </h2> 
      <select onChange={(e) => handleChange(e)}>
        <option value="center">center</option>
        <option value="flex-start">top</option>
        <option value="flex-end">bottom</option>
      </select>
   </div>
 )
}