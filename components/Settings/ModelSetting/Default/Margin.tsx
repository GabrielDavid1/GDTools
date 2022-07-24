import React, { useState } from 'react';

export default function Margin (){
  const [dimensions, setDimensions] = useState({
    left: '0',
    right: '0',
    top: '0',
    down:'0',
  });
  
 return (
  <div className="margin-area"> 
    <h2> Margin </h2>
      <div className="wrapper">
        <div className="left-field">
          <p> Left: </p>  
          <input 
            type="text"
            value={dimensions.left} 
            onChange={(e) => setDimensions({...dimensions, left: e.target.value})} 
          />
        </div>
        <div className="right-field">
          <p> Right: </p> 
          <input 
            type="text"
            value={dimensions.right} 
            onChange={(e) => setDimensions({...dimensions, right: e.target.value})} 
          />
        </div>
        <div className="top-field">
          <p> Top: </p> 
          <input 
            type="text"
            value={dimensions.top} 
            onChange={(e) => setDimensions({...dimensions, top: e.target.value})} 
          />
        </div>
        <div className="bottom-field">
          <p> Bottom: </p> 
          <input 
            type="text"
            value={dimensions.down} 
            onChange={(e) => setDimensions({...dimensions, down: e.target.value})} 
          />
        </div>
      </div>
  </div>
 )
}