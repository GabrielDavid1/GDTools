//React
import React from "react";

//Contexts
import { useFuncs } from "../../../../contexts/Functionalities";

export default function FontColor() {
  const { funcs, setFuncs, selected } = useFuncs();

  function handleChange(e = {} as React.ChangeEvent<HTMLInputElement>) {
    if (selected.config !== undefined) {
      selected.config.color = e.target.value;
    }
    setFuncs([...funcs]);
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
