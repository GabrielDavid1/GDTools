//React
import React from 'react';

//Components 
import Div from '../components/Settings/ModelSetting/Div';
import AppContent from '../components/Settings/ModelSetting/AppContent';

export default function GetSection (type:string | undefined) {
    switch(type) {
        case 'div': return <Div title="Div" />;
        default: return <AppContent title={(type !== undefined) ? type : ''} />;
    }
} 