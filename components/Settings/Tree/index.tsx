//React
import React, { useCallback } from 'react';

//Contexts
import { useFuncs } from '../../../contexts/Functionalities';

//Types
import { Funcs } from '../../../types/Funcs';

//Components
import ElementList from './List';

export default function Tree (){
  const { funcs } = useFuncs();
  
  const renderTree = useCallback((nodes:Funcs) => (      
    ((nodes !== undefined )) && (    
      <ElementList 
        nodes={nodes}
        key={nodes.id} 
        inputName={(nodes.name !== undefined) ? nodes.name : ''}
      >
        {Array.isArray(nodes.children)
          ? nodes.children.map((node) => renderTree(node)) 
          : null}
      </ElementList>
  )), [funcs]);

  return (
    <div className="tree-list">
      {renderTree(funcs[0])} {/* <- Header  */} 
      {renderTree(funcs[1])} {/* <- Main    */} 
      {renderTree(funcs[2])} {/* <- Tab Nav */} 
    </div>
  );
}