//React
import React from 'react';

//Contexts
import { useCodes } from '../../../../contexts/Codes';
import { useFuncs } from '../../../../contexts/Functionalities';

//Types
import { Funcs } from '../../../../types/Funcs';

//Code
import mountStyle from '../../../../Code/mountStyle';

export default function FontFamily () {
 const { funcs, setFuncs, selected } = useFuncs();
 const { codeStyles, setCodeStyles } = useCodes();

 function handleChangeStyle (oldStyle:Funcs, newStyle:Funcs) { 
   setCodeStyles(codeStyles.replace(mountStyle(oldStyle), mountStyle(newStyle)));
 }

 function handleChange (e = {} as React.ChangeEvent<HTMLSelectElement>) {
    if (selected.config !== undefined) {
        const oldFunc = JSON.stringify(selected);
        const newFunc = JSON.parse(oldFunc);
        
        newFunc.config.fontFamily = e.target.value;
        handleChangeStyle(selected, newFunc);

        selected.config = newFunc.config;
        setFuncs([...funcs]); 
    }
    e.preventDefault();
 }

 return (
   <div className="fontFamily-area">
      <h2> Font Family </h2> 
      <select 
        defaultValue={selected?.config?.fontFamily}
        onChange={(e) => handleChange(e)}
      >
        <option value="arial">Arial</option>
        <option value="monospace">Monospace</option>
        <option value="cursive">Cursive</option>
        <option value="roboto">Roboto</option>
      </select>
   </div>
 )
}