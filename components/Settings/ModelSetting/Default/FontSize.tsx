//React
import React from 'react';

//Contexts
import { useFuncs } from '../../../../contexts/Functionalities';

export default function FontSize () {
  const { funcs, setFuncs, selected } = useFuncs();

  function handleChange (e = {} as React.ChangeEvent<HTMLSelectElement>) {
     if (selected.config !== undefined) {
         selected.config.fontSize = e.target.value;
     }
     setFuncs([...funcs]);
     e.preventDefault();
  }

 return (
   <div className="fontSize-area">
      <h2> Font Size </h2> 
      <select onChange={(e) => handleChange(e)}>
        <option value="10px">10px</option>
        <option value="12px">12px</option>
        <option value="16px">16px</option>
        <option value="18px">18px</option>
        <option value="20px">20px</option>
        <option value="24px">24px</option>
        <option value="28px">28px</option>
        <option value="32px">32px</option>
        <option value="36px">36px</option>
        <option value="40px">40px</option>
      </select>
   </div>
 )
}