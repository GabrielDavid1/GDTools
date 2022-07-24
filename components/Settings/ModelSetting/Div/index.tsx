//React
import React from 'react';

//Components
import Border from '../Default/Border';
import BoxShadow from '../Default/BoxShadow';
import ColorArea from '../Default/ColorArea';
import Dimension from '../Default/Dimension';
import Margin from '../Default/Margin';
import Position from '../Default/Position';

interface Props {
    title:string;
}

export default function Div ({ title }:Props){
 return (
    <>
     <h2> {title} </h2>
     <ColorArea />
     <Dimension />
     <BoxShadow />
     <Border />
     <Margin />
     <Position />
    </>
 )
}