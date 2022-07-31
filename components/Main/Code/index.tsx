//React
import React, { useState } from "react";

//Styles
import { Tab } from "./styles";

export default function Code() {
  const [tabs, setTabs] = useState({
    index: true,
    styles: false,
    tab: false,
  });

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
         <textarea>
          testando
         </textarea>  
        </div>
        <div className="copyArea">
            Copy
        </div>
      </div> 
    </div>
  );
}
