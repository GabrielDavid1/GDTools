//React
import React from "react";

//Contexts
import { useFuncs } from "../../../../contexts/Functionalities";

export default function ScrollArea() {
  const { funcs, setFuncs, selected } = useFuncs();

  function handleChange(e = {} as React.ChangeEvent<HTMLSelectElement>) {
    const value = Number(e.target.value);
    if (selected.config !== undefined) {
      const oldFunc = JSON.stringify(selected);
      const newFunc = JSON.parse(oldFunc);
      if (value === 0) {
        newFunc.config.isScrollX = false;
        newFunc.config.isScrollY = false;
        selected.config = newFunc.config;
      }
      if (value === 1) {
        newFunc.config.isScrollX = true;
        newFunc.config.isScrollY = false;
        selected.config = newFunc.config;
      }
      if (value === 2) {
        newFunc.config.isScrollX = false;
        newFunc.config.isScrollY = true;
        selected.config = newFunc.config;
      }
      setFuncs([...funcs]);
    }
    e.preventDefault();
  }

  return (
    <div className="boxShadow-area">
      <h2> Scroll Area </h2>
      <select onChange={(e) => handleChange(e)}>
        <option value={0}>none</option>
        <option value={1}>Horizontal</option>
        <option value={2}>Vertical</option>
      </select>
    </div>
  );
}
