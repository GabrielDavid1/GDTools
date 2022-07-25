//React
import React from "react";

//Styled Components
import { 
  AppBody, 
  AppHeader, 
  AppTab
} from "./styles";

//Components
import InputView from "./Elements/Input";

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
          <InputView />
        </AppBody>
        
        <AppTab>
          
        </AppTab>
      </div>
    </main>
  );
}
