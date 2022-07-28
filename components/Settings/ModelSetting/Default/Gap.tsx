//React
import React from 'react';

//Contexts
import { useFuncs } from '../../../../contexts/Functionalities';

export default function Gap () {
  const { funcs, setFuncs, selected } = useFuncs();

  function handleChange(
    e = {} as React.ChangeEvent<HTMLSelectElement>
  ) {
    if (selected.config !== undefined) {
        const oldFunc = JSON.stringify(selected);
        const newFunc = JSON.parse(oldFunc);
        newFunc.config.gap = e.target.value;
        selected.config = newFunc.config;
        setFuncs([...funcs]);
    }
    e.preventDefault();
  }

  return (
   <div className="position-area">
      <h2> Gap Area </h2> 
      <select 
        defaultValue={selected?.config?.gap}
        onChange={(e) => handleChange(e)}
      >
        <option value="0px">0px</option>
        <option value="1px">1px</option>
        <option value="2px">2px</option>
        <option value="3px">3px</option>
        <option value="4px">4px</option>
        <option value="5px">5px</option>
        <option value="10px">10px</option> 
      </select>
   </div>
  )
}