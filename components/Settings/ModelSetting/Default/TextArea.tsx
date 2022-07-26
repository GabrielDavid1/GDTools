import React, { useState } from 'react';

export default function TextArea (){
 const [value, setValue] = useState('Button');

 return (
  <div className="text-area">
    <div className="field">
      <h2> Text Content: </h2>  
      <input 
          type="text"
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
      />
    </div>  
  </div>
 )
}