//React
import React from 'react';

//Components
import Dimension from '../Default/Dimension';
import Margin from '../Default/Margin';
import Position from '../Default/Position';
import Border from '../Default/Border';
import ColorArea from '../Default/ColorArea';
import TextArea from '../Default/TextArea';
import FontSize from '../Default/FontSize';
import FontColor from '../Default/FontColor';
interface Props {
    title:string;
}

export default function Button ({ title }: Props) {
 return (
    <>
     <h2> {title} </h2>
     <ColorArea />
     <Dimension width={false} />
     <FontColor />
     <FontSize />
     <Border />
     <TextArea />
     <Margin />
     <Position />
    </>
 )
}