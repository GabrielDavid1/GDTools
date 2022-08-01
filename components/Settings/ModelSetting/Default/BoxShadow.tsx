//React
import React from 'react';

//Code
import mountStyle from '../../../../Code/mountStyle';

//Contexts
import { useCodes } from '../../../../contexts/Codes';
import { useFuncs } from '../../../../contexts/Functionalities';

//Types
import { Funcs } from '../../../../types/Funcs';

export default function BoxShadow () {
 const { funcs, setFuncs, selected } = useFuncs();
 const { codeStyles, setCodeStyles } = useCodes();

 function handleChangeStyle (oldStyle:Funcs, newStyle:Funcs) { 
  setCodeStyles(codeStyles.replace(mountStyle(oldStyle), mountStyle(newStyle)));
}

 function handleChange (e = {} as React.ChangeEvent<HTMLSelectElement>) {
    const value = Number(e.target.value); 
    if (selected.config !== undefined) {
        const oldFunc = JSON.stringify(selected);
        const newFunc = JSON.parse(oldFunc);

        newFunc.config.boxShadow = value;
        handleChangeStyle(selected, newFunc);
        
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