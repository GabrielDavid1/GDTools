//React
import React from 'react';

//Contexts
import { useFuncs } from '../../../../contexts/Functionalities';

export default function TextArea (){
  const { funcs, setFuncs, selected } = useFuncs();

  function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
      if (selected.config !== undefined) {
          const oldFunc = JSON.stringify(selected);
          const newFunc = JSON.parse(oldFunc);
          newFunc.config.textContent = e.target.value;
          selected.config = newFunc.config;
          setFuncs([...funcs]); 
      }
      e.preventDefault();
  }

 return (
  <div className="text-area">
    <div className="field">
      <h2> Text Content: </h2>  
      <input 
          type="text"
          value={selected?.config?.textContent} 
          onChange={(e) => handleChange(e)} 
      />
    </div>  
  </div>
 )
}