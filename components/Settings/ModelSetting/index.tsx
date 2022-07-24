//React
import React from 'react';

//Components
import ColorArea from './Div/ColorArea';
import Dimension from './Div/Dimension';
import BoxShadow from './Div/BoxShadow';

export default function ModelSetting (){
 return (
   <div className="model-settings"> 
      <ColorArea />
      <Dimension />
      <BoxShadow />
   </div>
 )
}