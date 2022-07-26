//React
import React from 'react';

//Components
import Div from './Div';

//Static
import { Config } from '../../../types/Funcs';
interface Props {
  config: Config | undefined;
}

export default function ModelSetting ({ config }:Props){
  return (
   <div className="model-settings"> 
      <Div config={(config !== undefined) ? config : {}} title="Div" />
   </div>
  )
}