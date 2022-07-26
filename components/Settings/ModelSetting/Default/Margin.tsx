//React
import React from "react";

//Contexts
import { useFuncs } from "../../../../contexts/Functionalities";

export default function Margin() {
  const { funcs, setFuncs, selected } = useFuncs();

  function handleChangeLeft(e: React.ChangeEvent<HTMLInputElement>) {
    if (selected.config !== undefined) {
        selected.config.marginLeft = e.target.value;
    }
    setFuncs([...funcs]);
    e.preventDefault();
  }

  function handleChangeRight(e: React.ChangeEvent<HTMLInputElement>) {
    if (selected.config !== undefined) {
        selected.config.marginRight = e.target.value;
    }
    setFuncs([...funcs]);
    e.preventDefault();
  }

  function handleChangeTop(e: React.ChangeEvent<HTMLInputElement>) {
    if (selected.config !== undefined) {
        selected.config.marginTop = e.target.value; 
    }
    setFuncs([...funcs]);
    e.preventDefault();
  }

  function handleChangeBottom(e: React.ChangeEvent<HTMLInputElement>) {
    if (selected.config !== undefined) {
        selected.config.marginBottom = e.target.value;
    }
    setFuncs([...funcs]);
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
