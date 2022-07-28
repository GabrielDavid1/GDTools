//React
import React from 'react';

//Contexts
import { useFuncs } from '../../../../contexts/Functionalities';

export default function ChangeIcon () {
 const { funcs, setFuncs, selected } = useFuncs();

 function handleChange (e = {} as React.ChangeEvent<HTMLSelectElement>) {
    if (selected.config !== undefined) {
        const oldFunc = JSON.stringify(selected);
        const newFunc = JSON.parse(oldFunc);
        newFunc.config.svgName = e.target.value;
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
        <option value="books">Books</option>
        <option value="car">Car</option>
        <option value="circle">Circle</option>
        <option value="delete">Delete</option>
        <option value="gear">Gear</option>
        <option value="graph">Graph</option>
        <option value="home">Home</option>
        <option value="map">Map</option>
        <option value="newDown">NewDown</option>
        <option value="newpage">NewPage</option>
        <option value="papers">Papers</option>
        <option value="profile">Profile</option>
      </select>
   </div>
 )
}