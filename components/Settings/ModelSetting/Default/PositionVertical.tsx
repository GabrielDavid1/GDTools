//React
import React from 'react';

//Contexts
import { useCodes } from '../../../../contexts/Codes';
import { useFuncs } from '../../../../contexts/Functionalities';

//Types
import { Funcs } from '../../../../types/Funcs';

//Code
import mountStyle from '../../../../Code/mountStyle';

export default function PositionVertical () {
 const { funcs, setFuncs, selected } = useFuncs();
 const { codeStyles, setCodeStyles } = useCodes();

 function handleChangeStyle (oldStyle:Funcs, newStyle:Funcs) { 
   setCodeStyles(codeStyles.replace(mountStyle(oldStyle), mountStyle(newStyle)));
 }

 function handleChange (e = {} as React.ChangeEvent<HTMLSelectElement>) {
    if (selected.config !== undefined) {
        const oldFunc = JSON.stringify(selected);
        const newFunc = JSON.parse(oldFunc);

        newFunc.config.alignItems = e.target.value;
        handleChangeStyle(selected, newFunc);

        selected.config = newFunc.config;
        setFuncs([...funcs]);   
    }
    e.preventDefault();
 }

 return (
   <div className="position-area">
      <h2> Position Vertical </h2> 
      <select 
        defaultValue={selected?.config?.alignItems}
        onChange={(e) => handleChange(e)}
      >
        <option value="center">center</option>
        <option value="flex-start">{(selected.config?.flexDirection === 'row') ? 'top' : 'left'}</option>
        <option value="flex-end">{(selected.config?.flexDirection === 'row') ? 'bottom' : 'right'}</option>
      </select>
   </div>
 )
}