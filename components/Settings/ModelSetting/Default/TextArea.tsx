//React
import React from 'react';

//Code
import getFuncTypes from '../../../../Code/getFuncTypes';

//Contexts
import { useCodes } from '../../../../contexts/Codes';
import { useFuncs } from '../../../../contexts/Functionalities';

//Types
import { Funcs } from '../../../../types/Funcs';

export default function TextArea (){
  const { getCode, setCode } = useCodes();
  const { funcs, setFuncs, selected } = useFuncs();

  function handleCode (oldFunc:string, newFunc:Funcs) {
    const mac = (newFunc.mac) ? newFunc?.mac : '';
    const oldElement = getFuncTypes(JSON.parse(oldFunc), 'first');
    setCode(getCode(mac).replace(oldElement, getFuncTypes(newFunc, 'first')), mac);
  }
  
  function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
      if (selected.config !== undefined) {
          const oldFunc = JSON.stringify(selected);
          const newFunc = JSON.parse(oldFunc);

          newFunc.config.textContent = e.target.value;
          handleCode(oldFunc, newFunc);

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