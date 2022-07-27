//React
import React from 'react';

//Components
import Dimension from '../Default/Dimension';
import Margin from '../Default/Margin';
import Position from '../Default/Position';
import Border from '../Default/Border';
import BoxShadow from '../Default/BoxShadow';
import ColorArea from '../Default/ColorArea';
import Direction from '../Default/Direction';
import BorderRadius from '../Default/BorderRadius';
import Gap from '../Default/Gap';
import PositionHorizontal from '../Default/PositionHorizontal';
import PositionVertical from '../Default/PositionVertical';
import ScrollArea from '../Default/ScrollArea';

interface Props {
    title:string;
}

export default function ScrollList ({ title }: Props) {
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