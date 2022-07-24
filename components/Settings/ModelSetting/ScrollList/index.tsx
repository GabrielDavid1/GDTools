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

interface Props {
    title:string;
}

export default function ScrollList ({ title }: Props) {
 return (
    <>
     <h2> {title} </h2>
     <ColorArea />
     <Dimension />
     <Direction />
     <BoxShadow />
     <Border />
     <Margin />
     <Position />
    </>
 )
}