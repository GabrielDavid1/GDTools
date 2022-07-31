//React
import React, { useEffect, useState } from "react";
import defaultModel from "../../../Code/defaultModel";

//Contexts
import { useCodes } from "../../../contexts/Codes";

//Styles
import { Tab } from "./styles";
import useCopy from "use-copy";

export default function Code() {
  const [tabs, setTabs] = useState({
    index: true,
    styles: false,
    tab: false,
  });
  
  const [codeView, setCodeView] = useState('');

  const {
    codeHeader, 
    codeMain, 
    codeTab, 
    codeImports, 
  } = useCodes();  

  const [copied, copy, setCopied] = useCopy(defaultModel('full').replace('[children]', codeHeader+'\n'+codeMain+'\n'+codeTab));

  useEffect(() => {
     const initial = defaultModel('full').replace('[children]', codeHeader+'\n'+codeMain+'\n'+codeTab);
     const withImports = initial.replace('[imports]', codeImports);
     const noSpace = withImports.replace(/space/gi, '\n');
     const noBrackets = noSpace.replace(/[\[\]\\;&*()_+=]/gi, '');
     const noChildren  = noBrackets.replace(/children/gi, '');
     const noVariables = noChildren.replace('[variables]', '');
     setCodeView(noVariables);
  }, [codeHeader, codeMain, codeTab]);

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

  function handleClick () {
    copy();
    setTimeout(() => {
       setCopied(false);
    }, 3000);
  }

  return (
    <div className="codeContent">
      <div className="codeHeader">
        <Tab isActive={tabs.index} onClick={() => handleToggle("index")}>
          GdTools.tsx
        </Tab>
        <Tab isActive={tabs.styles} onClick={() => handleToggle("styles")}>
          Styles.ts
        </Tab>
        <Tab isActive={tabs.tab} onClick={() => handleToggle("tab")}>
          Tab Nav
        </Tab>
      </div>
      <div className="codeBody">
        <div className="codeMain">
         <textarea 
            value={codeView}
            disabled={true}
        > 
         </textarea>  
        </div>
        <div className="copy">
         <div className="area" onClick={handleClick}>
            Copy
         </div>
         <div className="message">
           {copied && <p> Copied!! </p>}
         </div>
        </div>
      </div> 
    </div>
  );
}
