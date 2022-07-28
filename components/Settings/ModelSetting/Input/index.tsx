//React
import React from 'react';

//Components
import Border from '../Default/Border';
import Margin from '../Default/Margin';
import FontSize from '../Default/FontSize';
import Position from '../Default/Position';
import ColorArea from '../Default/ColorArea';
import Dimension from '../Default/Dimension';
import FontFamily from '../Default/FontFamily';
import FontWeight from '../Default/FontWeight';
import BorderRadius from '../Default/BorderRadius';
import TextArea from '../Default/TextArea';
interface Props{
   title:string;
}

export default function Input ({ title }:Props) {
 return (
   <>
     <h2> {title} </h2>
     <ColorArea />
     <Dimension />
     <Border />
     <FontSize />
     <FontFamily />
     <BorderRadius />
     <FontWeight />
     <TextArea />
     <Margin />
     <Position />
   </>
 )
}