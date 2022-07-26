//React
import React from 'react';

//Components
import Border from '../Default/Border';
import BorderRadius from '../Default/BorderRadius';
import BoxShadow from '../Default/BoxShadow';
import ColorArea from '../Default/ColorArea';
import Dimension from '../Default/Dimension';
import Direction from '../Default/Direction';
import Gap from '../Default/Gap';
import Margin from '../Default/Margin';
import Position from '../Default/Position';
import PositionHorizontal from '../Default/PositionHorizontal';
import PositionVertical from '../Default/PositionVertical';
import ScrollArea from '../Default/ScrollArea';
interface Props {
    title:string;
}

export default function Div ({ title }:Props) {
 return (
    <>
     <h2> {title} </h2>
     <ColorArea />
     <Dimension />
     <BoxShadow />
     <BorderRadius />
     <Direction />
     <ScrollArea />
     <Border />
     <PositionHorizontal />
     <PositionVertical />
     <Gap />
     <Margin />
     <Position />
    </>
 )
}