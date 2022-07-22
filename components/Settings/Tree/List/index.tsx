//React
import React, { useState } from 'react';
import { useFuncs } from '../../../../contexts/Functionalities';
import { Funcs } from '../../../../types/Funcs';

interface Props {
  id:string;
  nodes:Funcs;
  inputName:string;
  setInputName: React.Dispatch<React.SetStateAction<string>>;
  children?: React.ReactNode;
}

export default function ElementList ({ 
  id,
  nodes,
  inputName,
  setInputName,
  children,
}:Props){
  const { deleteNode } = useFuncs();
  return (
    <div className="element-list">
      <div className="content" onClick={() => {deleteNode(nodes)}}> 
        <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)}/>
        <div className="actions">
          <a> 
            <svg
              focusable="false" 
              aria-hidden="true" 
              viewBox="0 0 24 24" 
              data-testid="DownIcon" 
            >
              <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z">
              </path>
            </svg>
          </a>
          <a> 
            <svg
              focusable="false" 
              aria-hidden="true" 
              viewBox="0 0 24 24" 
              data-testid="DeleteIcon" 
            >
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z">
              </path>
            </svg>
          </a>          
        </div>
      </div>
      {children}
    </div>
 )
}