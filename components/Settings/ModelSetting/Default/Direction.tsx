//React
import React from 'react';

//Contexts
import { useFuncs } from '../../../../contexts/Functionalities';

export default function Direction () {
 const { funcs, setFuncs, selected } = useFuncs();

 function handleChange (e = {} as React.ChangeEvent<HTMLSelectElement>) { 
    if (selected.config !== undefined) {
        const oldFunc = JSON.stringify(selected);
        const newFunc = JSON.parse(oldFunc);
        newFunc.config.flexDirection = e.target.value;
        selected.config = newFunc.config;
        setFuncs([...funcs]);
    }
    e.preventDefault();
 }
 return (
   <div className="fontFamily-area">
      <h2> Direction </h2> 
      <select 
        defaultValue={selected?.config?.flexDirection}
        onChange={(e) => handleChange(e)}
      >
        <option value="row">Horizontal</option>
        <option value="column">Vertical</option>
      </select>
   </div>
 )
}