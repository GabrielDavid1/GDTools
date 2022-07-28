//React
import React from 'react';

//Contexts
import { useFuncs } from '../../../../contexts/Functionalities';

export default function BorderRadius () {
 const { funcs, setFuncs, selected } = useFuncs();

 function handleChange (e = {} as React.ChangeEvent<HTMLSelectElement>) {
      if (selected.config !== undefined) {
          const oldFunc = JSON.stringify(selected);
          const newFunc = JSON.parse(oldFunc);

          newFunc.config.borderRadius = e.target.value;

          selected.config = newFunc.config;
          setFuncs([...funcs]);
      }
      setFuncs([...funcs]);
      e.preventDefault();
 }

 return (
   <div className="boxShadow-area">
      <h2> Border Radius </h2> 
      <select 
        defaultValue={selected?.config?.borderRadius}
        onChange={(e) => handleChange(e)}
      >
        <option value="0px">0px</option>
        <option value="1px">1px</option>
        <option value="2px">2px</option>
        <option value="3px">3px</option>
        <option value="10px">10px</option>
        <option value="20px">20px</option>
        <option value="30px">30px</option>
        <option value="50px">50px</option>
        <option value="100px">100px</option>
      </select>
   </div>
 )
}