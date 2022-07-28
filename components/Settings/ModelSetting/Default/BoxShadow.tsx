//React
import React from 'react';

//Contexts
import { useFuncs } from '../../../../contexts/Functionalities';

export default function BoxShadow () {
 const { funcs, setFuncs, selected } = useFuncs();

 function handleChange (e = {} as React.ChangeEvent<HTMLSelectElement>) {
    const value = Number(e.target.value); 
    if (selected.config !== undefined) {
        const oldFunc = JSON.stringify(selected);
        const newFunc = JSON.parse(oldFunc);

        newFunc.config.boxShadow = value;

        selected.config = newFunc.config;
        setFuncs([...funcs]);
    }
    e.preventDefault();
 }

 return (
   <div className="boxShadow-area">
      <h2> Box Shadow </h2> 
      <select 
        defaultValue={selected?.config?.boxShadow}
        onChange={(e) => handleChange(e)}
      >
        <option value={0}>0%</option>
        <option value={1}>10%</option>
        <option value={5}>50%</option>
        <option value={10}>100%</option>
      </select>
   </div>
 )
}