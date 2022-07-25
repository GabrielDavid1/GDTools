//React
import React from 'react';
import Border from '../Default/Border';

//Components
import ColorArea from '../Default/ColorArea';
import Dimension from '../Default/Dimension';
import FontFamily from '../Default/FontFamily';
import FontSize from '../Default/FontSize';
import FontWeight from '../Default/FontWeight';
import Margin from '../Default/Margin';
import Position from '../Default/Position';

interface Props{
   title:string;
}

export default function Input ({ title }:Props) {
 return (
   <>
     <ColorArea />
     <Dimension />
     <Border />
     <FontSize />
     <FontFamily />
     <FontWeight />
     <Margin />
     <Position />
   </>
 )
}