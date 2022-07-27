//React
import React from 'react';

//Contexts
import { useFuncs } from '../../../../contexts/Functionalities';

export default function ScrollArea () {
 const { funcs, setFuncs, selected } = useFuncs();

 function handleChange (e = {} as React.ChangeEvent<HTMLSelectElement>) {
    const value = Number(e.target.value); 
    if (selected.config !== undefined) {
        if (value === 0) {
            selected.config.isScrollX = false;
            selected.config.isScrollY = false;
        }
        if (value === 1) {
            selected.config.isScrollX = true;
            selected.config.isScrollY= false;
        }
        if (value === 2) {
            selected.config.isScrollX = false;
            selected.config.isScrollY= true;
        }
        setFuncs([...funcs]);
    }
    e.preventDefault();
 }

 return (
   <div className="boxShadow-area">
      <h2> Scroll Area </h2> 
      <select onChange={(e) => handleChange(e)}>
        <option value={0}>none</option>
        <option value={1}>Horizontal</option>
        <option value={2}>Vertical</option>
      </select>
   </div>
 )
}