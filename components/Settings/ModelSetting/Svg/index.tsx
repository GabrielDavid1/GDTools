//React
import React from 'react';
import ChangeIcon from '../Default/ChangeIcon';

//Components
import ColorArea from '../Default/ColorArea';
import Dimension from '../Default/Dimension';
interface Props {
    title:string;
}

export default function Svg ({ title }: Props) {
 return (
    <>
     <h2> {title} </h2>
     <ColorArea />
     <Dimension width={false} height={true}/>
     <ChangeIcon />
    </>
 )
}