//React
import React from 'react';

//Components
import ColorArea from './Div/ColorArea';
import Dimension from './Div/Dimension';
import BoxShadow from './Div/BoxShadow';
import Border from './Div/Border';
import Margin from './Div/Margin';
import Position from './Div/Position';

export default function ModelSetting (){
 return (
   <div className="model-settings"> 
      <ColorArea />
      <Dimension />
      <BoxShadow />
      <Border />
      <Margin />
      <Position />
   </div>
 )
}