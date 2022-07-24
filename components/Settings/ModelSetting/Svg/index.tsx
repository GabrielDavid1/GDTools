//React
import React from 'react';

//Components
import ColorArea from '../Default/ColorArea';
import Dimension from '../Default/Dimension';
import Margin from '../Default/Margin';

interface Props {
    title:string;
}

export default function Svg ({ title }: Props) {
 return (
    <>
     <h2> {title} </h2>
     <ColorArea />
     <Dimension />
     <Margin />
    </>
 )
}