//React
import React from 'react';

//Contexts
import { useFuncs } from '../../../contexts/Functionalities';

export default function BottomTab (){
 const { deleteAll } = useFuncs();
 return (
   <div className="bottom-tab" onClick={() => deleteAll()}>
     <a> Delete All </a>
   </div>
 )
}