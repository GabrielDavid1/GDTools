//React
import React from "react";

//Styled Components
import { AppBody, AppHeader, AppTab } from "./styles";

//Components
import InputView from "./Elements/Input";
import { DivView } from "./Elements/Div";

//Static
import { Config } from "../../types/Funcs";

interface Props {
  config: Config | undefined;
}

export default function Main({ config }: Props) {

  

  return (
    <main className="content">
      <span className="code-view">
        <a>
          <p> View code </p>
        </a>
      </span>
      <div className="app-content">
        <AppHeader> </AppHeader>

        <AppBody>
          <DivView config={config} />
        </AppBody>

        <AppTab> </AppTab>
      </div>
    </main>
  );
}
