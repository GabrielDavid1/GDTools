//React
import React from 'react';

//Components  
import BottomTab from './BottomTab';
import Header from './Header';
import Tree from './Tree';

export default function Settings (){
 return (
   <div className="content">
     <Header />
     <BottomTab />
     <Tree />
   </div>
 )
}