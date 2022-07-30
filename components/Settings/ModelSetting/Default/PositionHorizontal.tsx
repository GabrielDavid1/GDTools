//React
import React from 'react';

//Contexts
import { useCodes } from '../../../../contexts/Codes';
import { useFuncs } from '../../../../contexts/Functionalities';

//Types
import { Funcs } from '../../../../types/Funcs';

//Code
import mountStyle from '../../../../Code/mountStyle';

export default function PositionHorizontal () {
 const { funcs, setFuncs, selected } = useFuncs();
 const { codeStyles, setCodeStyles } = useCodes();

 function handleChangeStyle (oldStyle:Funcs, newStyle:Funcs) { 
   setCodeStyles(codeStyles.replace(mountStyle(oldStyle), mountStyle(newStyle)));
 }

 function handleChange (e = {} as React.ChangeEvent<HTMLSelectElement>) {
    if (selected.config !== undefined) {
        const oldFunc = JSON.stringify(selected);
        const newFunc = JSON.parse(oldFunc);

        newFunc.config.justifyContent = e.target.value;
        handleChangeStyle(selected, newFunc);

        selected.config = newFunc.config;
        setFuncs([...funcs]);
    }
    e.preventDefault();
 }

 return (
   <div className="position-area">
      <h2> Position Horizontal </h2> 
      <select 
        defaultValue={selected?.config?.justifyContent}
        onChange={(e) => handleChange(e)}
      >
        <option value="center">center</option>
        <option value="flex-start">left</option>
        <option value="flex-end">right</option>
      </select>
   </div>
 )
}