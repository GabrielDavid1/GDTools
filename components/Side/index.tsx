//React
import React from 'react';

//Utils
import Elements from '../../utils/Elements';

export default function Side (){
 return (
   <section className="side-area">
    {Elements.map(({ name,fc }, index) => {
      return (
        <a key={index}
           className="block" 
           onClick={() => fc()}
        >
         {name}
       </a>
      )
    })}
   </section>
 )
}