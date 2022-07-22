//React
import React from 'react';

interface Props {
    children?: React.ReactNode;
}

export default function ElementList ({ children }:Props){
 return (
    <div className="element-list">
      <div className="content"> 
        <p> nome da pastakkkkk </p>
        <p> v </p>
      </div>
      {children}
    </div>
 )
}