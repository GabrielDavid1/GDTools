//React
import React, { useState } from "react";

//Contexts
import { useFuncs } from "../../../../contexts/Functionalities";
interface Props {
  width?:boolean;
  height?:boolean;
}

export default function Dimension({ width, height }:Props) {
  const { funcs, setFuncs, selected } = useFuncs();

  function handleChange(
    e = {} as React.ChangeEvent<HTMLInputElement>,
    type: string
  ) {
    if (selected.config !== undefined) {
      selected.config.width =
        type === "width" ? e.target.value : selected.config.width;
      selected.config.height =
        type === "height" ? e.target.value : selected.config.height;
    }
    setFuncs([...funcs]);
    e.preventDefault();
  }

  function handleChangeRange (e = {} as React.ChangeEvent<HTMLInputElement>) {
    if (selected.config !== undefined) { 
        selected.config.width = e.target.value+'%';
        selected.config.height = e.target.value+'%';
        setFuncs([...funcs]);
        e.preventDefault();
    }
  }

  return (
    <div className="dimension-area">
      <h3> Dimensions </h3>
      <div className="range-slider-field">
        <input
          id="myRange"
          className="slider"
          type="range"
          min="1"
          max="100"
          value={selected?.config?.height?.replace('%', '')}
          onChange={(e) => handleChangeRange(e)}
        />
      </div>
      <div className="width-height-area">
        <div className="width-field">
          <p> Width: </p>
          <input
            type="text"
            disabled={selected.isRoot || width}
            value={selected?.config?.width}
            onChange={(e) => handleChange(e, "width")}
          />
        </div>
        <div className="height-field">
          <p> Height: </p>
          <input
            type="text"
            disabled={height}
            value={selected?.config?.height}
            onChange={(e) => handleChange(e, "height")}
          />
        </div>
      </div>
    </div>
  );
}
