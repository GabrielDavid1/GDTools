//React
import React from 'react';

//Components 
import Div from '../components/Settings/ModelSetting/Div';
import AppContent from '../components/Settings/ModelSetting/AppContent';
import Input from '../components/Settings/ModelSetting/Input';

export default function GetSection (type:string | undefined) {
    switch(type) {
        case 'div': return <Div title="Div" />;
        case 'input': return <Input title ="Input" />
        default: return <AppContent title={(type !== undefined) ? type : ''} />;
    }
} 