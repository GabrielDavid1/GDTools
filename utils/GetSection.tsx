//React
import React from 'react';

//Components 
import Header from '../components/Settings/Header';

//Types
import { Config } from '../types/Funcs';

interface Props {
    type:string;
    config:Config; 
    isActive:boolean; 
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GetSection ({
    type,
    config,
    isActive,
    setIsActive,
}:Props) {
    switch(type) {
        case 'header': return <Header config={config} isActive={isActive} setIsActive={setIsActive} />;
    }
} 