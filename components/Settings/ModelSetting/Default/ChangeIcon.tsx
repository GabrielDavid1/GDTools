//React
import React from 'react';

//Contexts
import { useCodes } from '../../../../contexts/Codes';
import { useFuncs } from '../../../../contexts/Functionalities';

//Code
import getFuncTypes from '../../../../Code/getFuncTypes';

//Types
import { Funcs } from '../../../../types/Funcs';

export default function ChangeIcon () {
 const { getCode, setCode } = useCodes();
 const { funcs, setFuncs, selected } = useFuncs();

 function handleCode (oldFunc:string, newFunc:Funcs) {
  const mac = (newFunc.mac) ? newFunc?.mac : '';
  const oldElement = getFuncTypes(JSON.parse(oldFunc), 'first');
  setCode(getCode(mac).replace(oldElement, getFuncTypes(newFunc, 'first')), mac);
 }

 function handleChange (e = {} as React.ChangeEvent<HTMLSelectElement>) {
    if (selected.config !== undefined) {
        const oldFunc = JSON.stringify(selected);
        const newFunc = JSON.parse(oldFunc);

        newFunc.config.svgName = e.target.value;
        handleCode(oldFunc, newFunc);

        selected.config = newFunc.config;
        setFuncs([...funcs]); 
    }
    e.preventDefault();
 }

 return (
   <div className="boxShadow-area">
      <h2> Change Icon </h2> 
      <select 
        defaultValue={selected?.config?.svgName}
        onChange={(e) => handleChange(e)}
      >
        <option value="library-books">Books</option>
        <option value="car-side">Car</option>
        <option value="circle">Circle</option>
        <option value="delete">Delete</option>
        <option value="gear">Gear</option>
        <option value="graph">Graph</option>
        <option value="home">Home</option>
        <option value="map">Map</option>
        <option value="down">Down</option>
        <option value="page">Page</option>
        <option value="md-newspaper-outline">Paper</option>
        <option value="user-circle-o">Profile</option>
      </select>
   </div>
 )
}