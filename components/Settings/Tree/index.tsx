//React
import React from 'react';

//Components
import ElementList from './List';

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