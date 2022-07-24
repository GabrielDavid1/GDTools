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
import ButtonArea from '../Default/TextArea';

interface Props {
    title:string;
}

export default function Button ({ title }: Props) {
 return (
    <>
     <h2> {title} </h2>
     <ColorArea />
     <Dimension />
     <Direction />
     <BoxShadow />
     <Border />
     <ButtonArea />
     <Margin />
     <Position />
    </>
 )
}