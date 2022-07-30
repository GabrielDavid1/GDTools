//React
import React from "react";

//Contexts
import { useCodes } from "../../../../contexts/Codes";
import { useFuncs } from "../../../../contexts/Functionalities";

//Types
import { Funcs } from "../../../../types/Funcs";

//Code
import mountStyle from "../../../../Code/mountStyle";

export default function FontColor() {
  const { funcs, setFuncs, selected } = useFuncs();
  const { codeStyles, setCodeStyles } = useCodes();

  function handleChangeStyle (oldStyle:Funcs, newStyle:Funcs) { 
    setCodeStyles(codeStyles.replace(mountStyle(oldStyle), mountStyle(newStyle)));
  }

  function handleChange(e = {} as React.ChangeEvent<HTMLInputElement>) {
    if (selected.config !== undefined) {
        const oldFunc = JSON.stringify(selected);
        const newFunc = JSON.parse(oldFunc);

        newFunc.config.color = e.target.value;
        handleChangeStyle(selected, newFunc);
        
        selected.config = newFunc.config;
        setFuncs([...funcs]);
    }
    e.preventDefault();
  }
  return (
    <div className="boxShadow-area">
      <h2> Font Color </h2>
      <input
        type="color"
        value={selected?.config?.color}
        onChange={handleChange}
      />
    </div>
  );
}
