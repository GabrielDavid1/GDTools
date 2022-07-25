import React, { useState } from 'react';
import { ButtonElement } from './ButtonElement';

interface Props {
    title?:string;
    color?:string;
    bgColor?:string;
}

export default function ButtonView ({ 
    title = 'Button',
    color = '#000',
    bgColor = '#fff',
    ...rest
}:Props) {
 const [properties, setProperties] = useState({
    color: color,
    bgColor: bgColor,
 });
 return <ButtonElement {...rest}
          color={properties.color}
          bgColor={properties.bgColor}
          
        > 
          {title} 
        </ButtonElement>;
}