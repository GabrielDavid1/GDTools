//React
import React, { useState } from 'react';

export default function Dimension () {
 const [value, setValue] = useState('0');

 const [dimensions, setDimensions] = useState({
    width: '0',
    height: '0',
 });

 return (
    <div className="dimension-area">
        <h3> Dimensions </h3>
        <div className="range-slider-field">
            <input 
            id="myRange" 
            className="slider" 
            type="range" 
            min="1" 
            max="100" 
            value={value}
            onChange={(e) => setValue(e.target.value)} 
            />
        </div>
        <div 
          className="width-height-area" 
          onClick={() => console.log(dimensions)}
        >
          <div className="width-field">
            <p> Width: </p>  
            <input 
                type="text"
                value={dimensions.width} 
                onChange={(e) => setDimensions({...dimensions, width: e.target.value})} 
            />
          </div>
          <div className="height-field">
            <p> Height: </p> 
            <input 
                type="text"
                value={dimensions.height} 
                onChange={(e) => setDimensions({...dimensions, height: e.target.value})} 
            />
          </div>
        </div>
    </div>
 )
}