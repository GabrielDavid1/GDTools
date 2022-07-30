//React
import React from 'react';

//Contexts
import { useCodes } from '../../../../contexts/Codes';
import { useFuncs } from '../../../../contexts/Functionalities';

//Types
import { Funcs } from '../../../../types/Funcs';

//Code
import mountStyle from '../../../../Code/mountStyle';

export default function Direction () {
 const { funcs, setFuncs, selected } = useFuncs();
 const { codeStyles, setCodeStyles } = useCodes();

 function handleChangeStyle (oldStyle:Funcs, newStyle:Funcs) { 
   setCodeStyles(codeStyles.replace(mountStyle(oldStyle), mountStyle(newStyle)));
 }

 function handleChange (e = {} as React.ChangeEvent<HTMLSelectElement>) { 
    if (selected.config !== undefined) {
        const oldFunc = JSON.stringify(selected);
        const newFunc = JSON.parse(oldFunc);

        newFunc.config.flexDirection = e.target.value;
        handleChangeStyle(selected, newFunc);

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