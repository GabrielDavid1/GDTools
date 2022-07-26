//React
import React from 'react';

//Components 
import Header from '../components/Settings/Header';
interface Props {
    type:string;
}

export default function GetSection ({
    type,
}:Props) {
    switch(type) {
        case 'header': return <Header />;
    }
} 