//React
import React from "react";

//Contexts
import { useCodes } from "../../../../contexts/Codes";
import { useFuncs } from "../../../../contexts/Functionalities";

//Types
import { Funcs } from "../../../../types/Funcs";

//Code
import mountStyle from "../../../../Code/mountStyle";

export default function Margin() {
  const { funcs, setFuncs, selected } = useFuncs();
  const { codeStyles, setCodeStyles } = useCodes();

  function handleChangeStyle (oldStyle:Funcs, newStyle:Funcs) { 
    setCodeStyles(codeStyles.replace(mountStyle(oldStyle), mountStyle(newStyle)));
  }

  function handleChangeLeft(e: React.ChangeEvent<HTMLInputElement>) {
    if (selected.config !== undefined) {
        const oldFunc = JSON.stringify(selected);
        const newFunc = JSON.parse(oldFunc);

        newFunc.config.marginLeft = e.target.value;
        handleChangeStyle(selected, newFunc);

        selected.config = newFunc.config;
        setFuncs([...funcs]);
    }
    e.preventDefault();
  }

  function handleChangeRight(e: React.ChangeEvent<HTMLInputElement>) {
    if (selected.config !== undefined) {
      const oldFunc = JSON.stringify(selected);
      const newFunc = JSON.parse(oldFunc);

      newFunc.config.marginRight = e.target.value;
      handleChangeStyle(selected, newFunc);

      selected.config = newFunc.config;
      setFuncs([...funcs]);
    }
    e.preventDefault();
  }

  function handleChangeTop(e: React.ChangeEvent<HTMLInputElement>) {
    if (selected.config !== undefined) {
      const oldFunc = JSON.stringify(selected);
      const newFunc = JSON.parse(oldFunc);

      newFunc.config.marginTop = e.target.value;
      handleChangeStyle(selected, newFunc);

      selected.config = newFunc.config;
      setFuncs([...funcs]);
    }
    e.preventDefault();
  }

  function handleChangeBottom(e: React.ChangeEvent<HTMLInputElement>) {
    if (selected.config !== undefined) {
      const oldFunc = JSON.stringify(selected);
      const newFunc = JSON.parse(oldFunc);

      newFunc.config.marginBottom = e.target.value;
      handleChangeStyle(selected, newFunc);

      selected.config = newFunc.config;
      setFuncs([...funcs]);
    }
    e.preventDefault();
  }

  return (
    <div className="margin-area">
      <h2> Margin </h2>
      <div className="wrapper">
        <div className="left-field">
          <p> Left: </p>
          <input
            type="text"
            value={selected.config?.marginLeft}
            onChange={(e) => handleChangeLeft(e)}
          />
        </div>
        <div className="right-field">
          <p> Right: </p>
          <input
            type="text"
            value={selected.config?.marginRight}
            onChange={(e) => handleChangeRight(e)}
          />
        </div>
        <div className="top-field">
          <p> Top: </p>
          <input
            type="text"
            value={selected.config?.marginTop}
            onChange={(e) => handleChangeTop(e)}
          />
        </div>
        <div className="bottom-field">
          <p> Bottom: </p>
          <input
            type="text"
            value={selected.config?.marginBottom}
            onChange={(e) => handleChangeBottom(e)}
          />
        </div>
      </div>
    </div>
  );
}
