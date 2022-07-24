//React
import React from 'react';

//Components
import ColorArea from '../Default/ColorArea';
import FontFamily from '../Default/FontFamily';
import FontSize from '../Default/FontSize';
import Margin from '../Default/Margin';

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
     <Margin />
    </>
 )
}