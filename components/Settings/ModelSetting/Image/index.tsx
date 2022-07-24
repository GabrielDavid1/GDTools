//React
import React from 'react';

//Components
import Dimension from '../Default/Dimension';
import Margin from '../Default/Margin';

interface Props {
    title:string;
}

export default function Image ({ title }: Props) {
 return (
    <>
     <h2> {title} </h2>
     <Dimension />
     <Margin />
    </>
 )
}