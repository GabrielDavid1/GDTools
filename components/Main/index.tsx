//React
import React from "react";

//Styled Components
import { 
  AppBody, 
  AppHeader, 
  AppTab
} from "./styles";

//Components
import { DivView } from "./Elements/Div";
import { TextView } from "./Elements/Text";
import { ImageView } from "./Elements/Image";
import ButtonView from "./Elements/Button";

//Utils
import { GetSvgIcon } from "../../utils/GetSvgIcon";
import SvgView from "./Elements/Svg";

export default function Main() {  
  return (
    <main className="content">
      <span className="code-view">
        <a>
          <p> View code </p>
        </a>
      </span>
      <div className="app-content">
        <AppHeader> 

        </AppHeader>

        <AppBody>
            <ButtonView />
        </AppBody>
        
        <AppTab>
          <SvgView name="circle" />
        </AppTab>
      </div>
    </main>
  );
}
