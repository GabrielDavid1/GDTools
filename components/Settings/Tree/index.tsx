//React
import React from 'react';

//Components
import ElementList from './ElementList';

export default function Tree (){
 return (
    <div className="tree-list">
      <ElementList>
         <ElementList />           
      </ElementList>
      <ElementList />
      <ElementList />
      <ElementList />
      <ElementList>
         <ElementList />
         <ElementList>
           <ElementList />           
         </ElementList>          
      </ElementList>
      <ElementList>
         <ElementList />           
      </ElementList>
      <ElementList />
      <ElementList />
      <ElementList />
      <ElementList>
         <ElementList />
         <ElementList>
           <ElementList />           
         </ElementList>          
      </ElementList>
      <ElementList>
         <ElementList />           
      </ElementList>
      <ElementList />
      <ElementList />
      <ElementList />
      <ElementList>
         <ElementList />
         <ElementList>
           <ElementList />           
         </ElementList>          
      </ElementList>
    </div>
 )
}