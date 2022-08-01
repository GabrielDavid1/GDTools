//React
import React from "react";

//Contexts
import { useCodes } from "../../../contexts/Codes";

//Styles
import { Tab } from "./styles";

//Components
import defaultModel from "../../../Code/defaultModel";
import IndexCode from "./IndexCode";
import StyleCode from "./StyleCode";
import TabCode from "./TabCode";

export default function Code() {
  const {
    codeHeader, 
    codeMain, 
    codeImports, 
    codeStyles,
    codeVariable,
    tabs, setTabs,
  } = useCodes();  
      
  const initial = defaultModel('full').replace('[children]', codeHeader+'\n'+codeMain);
  const withImports = initial.replace('[imports]', codeImports);
  const noSpace = withImports.replace(/space/gi, '\n');
  const noBrackets = noSpace.replace(/[\[\]\\]/gi, '');
  const noChildren  = noBrackets.replace(/children/gi, '');
  let fullCode = noChildren.replace('//variables', codeVariable);

  function handleToggle(param: string) {
    switch (param) {
      case "index":
        return setTabs({
          index: true,
          styles: false,
          tab: false,
        });
      case "styles":
        return setTabs({
          index: false,
          styles: true,
          tab: false,
        });
      case "tab":
        return setTabs({
          index: false,
          styles: false,
          tab:true,
        });
    }
  }

  return (
    <div className="codeContent">
      <div className="codeHeader">
        <Tab isActive={tabs.index} onClick={() => handleToggle("index")}>
          Index
        </Tab>
        <Tab isActive={tabs.styles} onClick={() => handleToggle("styles")}>
          Styles
        </Tab>
        <Tab isActive={tabs.tab} onClick={() => handleToggle("tab")}>
          Routes
        </Tab>
      </div>
      {tabs.index  && <IndexCode codeView={fullCode}   />}
      {tabs.styles && <StyleCode codeView={codeStyles} />}
      {tabs.tab && <TabCode />}
    </div>
  );
}
