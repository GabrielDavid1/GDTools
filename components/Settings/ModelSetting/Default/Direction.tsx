//React
import React from 'react';

//Contexts
import { useFuncs } from '../../../../contexts/Functionalities';

export default function Direction () {
 const { funcs, setFuncs, selected } = useFuncs();

 function handleChange (e = {} as React.ChangeEvent<HTMLSelectElement>) { 
    if (selected.config !== undefined) {
        selected.config.flexDirection = e.target.value;
    }
    setFuncs([...funcs]);
    e.preventDefault();
 }
 return (
   <div className="fontFamily-area">
      <h2> Direction </h2> 
      <select onChange={(e) => handleChange(e)}>
        <option value="none">none</option>
        <option value="row">Horizontal</option>
        <option value="column">Vertical</option>
      </select>
   </div>
 )
}