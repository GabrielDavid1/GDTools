//React
import React from 'react';

//Components 
import AppContent from '../components/Settings/ModelSetting/AppContent';

export default function GetSection (type:string | undefined) {
    switch(type) {
        default: return <AppContent title={(type !== undefined) ? type : ''} />;
    }
} 