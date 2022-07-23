//React
import React from "react";
import { DivView } from "./Elements/Div";

//Styled Components
import { 
  AppBody, 
  AppHeader, 
  AppTab
} from "./styles";

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
        <DivView />
        </AppBody>
        <AppTab>

        </AppTab>
      </div>
    </main>
  );
}
