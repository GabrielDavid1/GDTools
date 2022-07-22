import React, { useState } from 'react';
import { Details, Home } from './styles';

export default function Header (){
 const [ isActive, setIsActive ] = useState<boolean>(false);
 return (
   <header className="header-settings">
    <Home 
      isActive={isActive}
      onClick={() => setIsActive(true)}
    > H </Home>
    <Details 
      isActive={isActive}
      onClick={() => setIsActive(false)}
    > D </Details>
   </header> 
 )
}