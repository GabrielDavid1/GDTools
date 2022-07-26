//React
import React from 'react';
import { Config } from '../../../../types/Funcs';

//Components
import Border from '../Default/Border';
import BoxShadow from '../Default/BoxShadow';
import ColorArea from '../Default/ColorArea';
import Dimension from '../Default/Dimension';
import Gap from '../Default/Gap';
import Margin from '../Default/Margin';
import Position from '../Default/Position';
import PositionHorizontal from '../Default/PositionHorizontal';
import PositionVertical from '../Default/PositionVertical';
interface Props {
    title:string;
    config:Config | undefined;
}

export default function Div ({ title, config }:Props) {
 return (
    <>
     <h2> {title} </h2>
     <ColorArea config={config} />
     <Dimension />
     <BoxShadow />
     <Border />
     <PositionHorizontal />
     <PositionVertical />
     <Gap />
     <Margin />
     <Position />
    </>
 )
}