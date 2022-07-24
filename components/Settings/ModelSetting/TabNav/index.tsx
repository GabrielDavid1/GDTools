//React
import React from 'react';

//Components
import ColorArea from '../Default/ColorArea';
interface Props {
  title:string;
}

export default function TabNav ({ title }:Props){
 return (
    <>
     <h2> {title} </h2>
     <ColorArea />
    </>
 )
}