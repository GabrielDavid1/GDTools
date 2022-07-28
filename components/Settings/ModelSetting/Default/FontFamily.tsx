//React
import React from 'react';

//Contexts
import { useFuncs } from '../../../../contexts/Functionalities';

export default function FontFamily () {
 const { funcs, setFuncs, selected } = useFuncs();

 function handleChange (e = {} as React.ChangeEvent<HTMLSelectElement>) {
    if (selected.config !== undefined) {
        const oldFunc = JSON.stringify(selected);
        const newFunc = JSON.parse(oldFunc);
        newFunc.config.fontFamily = e.target.value;
        selected.config = newFunc.config;
        setFuncs([...funcs]); 
    }
    e.preventDefault();
 }

 return (
   <div className="fontFamily-area">
      <h2> Font Family </h2> 
      <select onChange={(e) => handleChange(e)}>
        <option value="arial">Arial</option>
        <option value="monospace">Monospace</option>
        <option value="cursive">Cursive</option>
        <option value="roboto">Roboto</option>
      </select>
   </div>
 )
}