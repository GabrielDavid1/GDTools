/* React */
import React from "react";

/* Contexto */ 

interface Props {
    visibility: boolean;
    refLeft:React.MutableRefObject<HTMLDivElement>;
    refTop:React.MutableRefObject<HTMLDivElement>; 
    refRight:React.MutableRefObject<HTMLDivElement>;
    refBottom:React.MutableRefObject<HTMLDivElement>;
}

export function Selection ({
   visibility,
   refLeft,
   refTop,
   refRight,
   refBottom
}: Props) {

   return (
      <>
       {(visibility)  ? 
       (<>
         <div ref={refLeft} className="resizer resizer-l"></div>
         <div ref={refTop} className="resizer resizer-t"></div>
         <div ref={refRight} className="resizer resizer-r"></div>
         <div ref={refBottom} className="resizer resizer-b"></div>

         <div className="resizer resizer-ld"></div>
         <div className="resizer resizer-td"></div>
         <div className="resizer resizer-rd"></div>
         <div className="resizer resizer-bd"></div>
       </>) 
       : 
       (<>
         <div ref={refLeft} className="nullo"></div>
         <div ref={refTop} className="nullo"></div>
         <div ref={refRight} className="nullo"></div>
         <div ref={refBottom} className="nullo"></div>
       </>)}
      </>
    )
}