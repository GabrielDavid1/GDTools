//React
import React from 'react';

//Components
import ColorArea from '../Default/ColorArea';
import FontFamily from '../Default/FontFamily';
import FontSize from '../Default/FontSize';
import FontWeight from '../Default/FontWeight';
import Margin from '../Default/Margin';
import Position from '../Default/Position';
import TextArea from '../Default/TextArea';
interface Props {
    title:string;
}

export default function Text ({ title }:Props){
 return (
    <>
     <h2> {title} </h2>
     <ColorArea />
     <FontSize />
     <FontFamily />
     <FontWeight />
     <TextArea />
     <Margin />
     <Position />
    </>
 )
}