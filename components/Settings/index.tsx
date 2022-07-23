//React
import React from "react";

//Contexts
import { useFuncs } from "../../contexts/Functionalities";

//Components
import BottomTab from "./BottomTab";
import Header from "./Header";
import ModelSetting from "./ModelSetting";
import Tree from "./Tree";

export default function Settings() {
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
        <ModelSetting />
      )}
    </div>
  );
}
