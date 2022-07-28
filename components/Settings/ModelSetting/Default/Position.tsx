//React
import React from 'react';

//Components
import { useFuncs } from '../../../../contexts/Functionalities';

export default function Position () {
 const { funcs, setFuncs, selected } = useFuncs();

 function handleChange (e = {} as React.ChangeEvent<HTMLSelectElement>) {
   if (selected.config !== undefined) {
       const oldFunc = JSON.stringify(selected);
       const newFunc = JSON.parse(oldFunc);
       newFunc.config.position = e.target.value;
       selected.config = newFunc.config;
       setFuncs([...funcs]);
   }
   e.preventDefault();
 }

 return (
   <div className="position-area">
      <h2> Position </h2> 
      <select 
        defaultValue={selected?.config?.position}
        onChange={(e) => handleChange(e)}
      >
        <option value="absolute">absolute</option>
        <option value="fixed">fixed</option>
        <option value="inherit">inherit</option>
        <option value="relative">relative</option>
        <option value="revert">revert</option>
        <option value="static">static</option>
        <option value="sticky">sticky</option>
        <option value="unset">unset</option>
      </select>
   </div>
 )
}