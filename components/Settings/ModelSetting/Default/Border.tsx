//React
import React from "react";

//Contexts
import { useFuncs } from "../../../../contexts/Functionalities";

export default function Border() {
  const { funcs, setFuncs, selected } = useFuncs()

  function handleChangePxBorder(
    e = {} as React.ChangeEvent<HTMLSelectElement>
  ) {
    if (selected.config !== undefined) {
      const oldFunc = JSON.stringify(selected);
      const newFunc = JSON.parse(oldFunc);
      newFunc.config.pxBorder = e.target.value;
      selected.config = newFunc.config;
      setFuncs([...funcs]);
    }
    e.preventDefault();
  }

  function handleChangeStyleBorder(
    e = {} as React.ChangeEvent<HTMLSelectElement>
  ) {
    if (selected.config !== undefined) {
      const oldFunc = JSON.stringify(selected);
      const newFunc = JSON.parse(oldFunc);
      newFunc.config.typeBorder = e.target.value;
      selected.config = newFunc.config;
      setFuncs([...funcs]);
    }
    e.preventDefault();
  }

  function handleChangeColorBorder(
    e = {} as React.ChangeEvent<HTMLInputElement>
  ) {
    if (selected.config !== undefined) {
      const oldFunc = JSON.stringify(selected);
      const newFunc = JSON.parse(oldFunc);
      newFunc.config.colorBorder = e.target.value;
      selected.config = newFunc.config;
      setFuncs([...funcs]);
    }
    e.preventDefault();
  }

  return (
    <div className="border-area">
      <h2> Border </h2>
      <div className="actions">
        <select 
          defaultValue={selected?.config?.pxBorder}
          onChange={(e) => handleChangePxBorder(e)}
        >
          <option value="0px">0px</option>
          <option value="1px">1px</option>
          <option value="2px">2px</option>
          <option value="3px">3px</option>
          <option value="4px">4px</option>
          <option value="5px">5px</option>
        </select>

        <select 
          defaultValue={selected?.config?.typeBorder}
          onChange={(e) => handleChangeStyleBorder(e)}
        >
          <option value="none">none</option>
          <option value="solid">solid</option>
          <option value="dashed">dashed</option>
          <option value="dotted">dotted</option>
        </select>

        <input
          type="color"
          value={selected?.config?.colorBorder}
          onChange={handleChangeColorBorder}
        />
      </div>
    </div>
  );
}
