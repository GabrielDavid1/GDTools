//React
import React, { useCallback, useState } from 'react';

//Contexts
import { useFuncs } from '../../../contexts/Functionalities';
import { Funcs } from '../../../types/Funcs';

//Components
import ElementList from './List';

export default function Tree (){
  const [inputName, setInputName] = useState<string>('Nome da pasta');

  const { funcs } = useFuncs();
  
  const renderTree = useCallback((nodes:Funcs, setInputName: React.Dispatch<React.SetStateAction<string>>) => (      
    ((nodes !== undefined )) && (    
      <ElementList 
        nodes={nodes}
        key={nodes.id} 
        id={nodes.id}
        inputName={nodes.name}
        setInputName={setInputName}
      >
        {Array.isArray(nodes.children)
          ? nodes.children.map((node) => renderTree(node, setInputName)) 
          : null}
      </ElementList>
    )   
  ), [funcs]);

  return (
    <div className="tree-list">
      {renderTree(funcs[0], setInputName)}
    </div>
  );
}