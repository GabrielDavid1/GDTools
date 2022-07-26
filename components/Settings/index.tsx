//React
import React from "react";

//Contexts
import { useFuncs } from "../../contexts/Functionalities";

//Types
import { Config } from "../../types/Funcs";

//Components
import BottomTab from "./BottomTab";
import Header from "./Header";
import ModelSetting from "./ModelSetting";
import Tree from "./Tree";

interface Props {
  config: Config;
}

export default function Settings({ config }:Props) {
  const { onToggle, setOnToggle } = useFuncs();
  return (
    <div className="content">
      <Header 
        isActive={onToggle} 
        setIsActive={setOnToggle}
      />
      {onToggle ? (
        <>
          <BottomTab />
          <Tree />
        </>
      ) : (
        <ModelSetting config={config} />
      )}
    </div>
  );
}
