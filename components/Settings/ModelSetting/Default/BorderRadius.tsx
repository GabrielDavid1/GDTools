//React
import React from 'react';

//Contexts
import { useFuncs } from '../../../../contexts/Functionalities';

export default function BorderRadius () {
 const { funcs, setFuncs, selected } = useFuncs();

 function handleChange (e = {} as React.ChangeEvent<HTMLSelectElement>) {
  const value = Number(e.target.value); 
  if (selected.config !== undefined) {
    selected.config.boxShadow = value;
  }
  setFuncs([...funcs]);
  e.preventDefault();
 } 

 return (
   <div className="boxShadow-area">
      <h2> Border Radius </h2> 
      <select onChange={(e) => handleChange(e)}>
        <option value={0}>0px</option>
        <option value={1}>1px</option>
        <option value={2}>2px</option>
        <option value={3}>3px</option>
        <option value={4}>4px</option>
        <option value={5}>5px</option>
        <option value={10}>10px</option> 
        <option value={20}>20px</option>
        <option value={30}>30px</option>
        <option value={50}>50px</option>
        <option value={100}>100px</option>
      </select>
   </div>
 )
}