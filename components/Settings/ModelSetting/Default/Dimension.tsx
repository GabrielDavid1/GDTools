//React
import React from "react";

//Code
import mountStyle from "../../../../Code/mountStyle";
import getFuncTypes from "../../../../Code/getFuncTypes";

//Contexts
import { useCodes } from "../../../../contexts/Codes";
import { useFuncs } from "../../../../contexts/Functionalities";

//Types
import { Funcs } from "../../../../types/Funcs";
interface Props {
  width?:boolean;
  height?:boolean;
}

export default function Dimension({ width, height }:Props) {
  const { funcs, setFuncs, selected } = useFuncs();
  const { setCode, getCode, codeStyles, setCodeStyles } = useCodes();

  function handleChangeStyle (oldStyle:Funcs, newStyle:Funcs) { 
    setCodeStyles(codeStyles.replace(mountStyle(oldStyle), mountStyle(newStyle)));
  }

  function handleChange(
    e = {} as React.ChangeEvent<HTMLInputElement>,
    type: string
  ) {
    if (selected.config !== undefined) {
        const oldFunc = JSON.stringify(selected);
        const newFunc = JSON.parse(oldFunc);

        newFunc.config.width = type === "width" ? e.target.value : newFunc.config.width;
        newFunc.config.height = type === "height" ? e.target.value : newFunc.config.height;

        handleChangeStyle(selected, newFunc);

        if (selected.type === 'svg') {
          const mac = (newFunc.mac) ? newFunc?.mac : '';
          const oldElement = getFuncTypes(JSON.parse(oldFunc), 'first');
          setCode(getCode(mac).replace(oldElement, getFuncTypes(newFunc, 'first')), mac);
        }

        selected.config = newFunc.config;
        setFuncs([...funcs]);
    }
    e.preventDefault();
  }

  function handleChangeRange (e = {} as React.ChangeEvent<HTMLInputElement>) {
    if (selected.config !== undefined) { 
        const oldFunc = JSON.stringify(selected);
        const newFunc = JSON.parse(oldFunc);

        newFunc.config.width = e.target.value+'%';
        newFunc.config.height = e.target.value+'%';

        handleChangeStyle(selected, newFunc);

        if (selected.type === 'svg') {
          const mac = (newFunc.mac) ? newFunc?.mac : '';
          const oldElement = getFuncTypes(JSON.parse(oldFunc), 'first');
          setCode(getCode(mac).replace(oldElement, getFuncTypes(newFunc, 'first')), mac);
        }

        selected.config = newFunc.config;
        setFuncs([...funcs]);
      }
      e.preventDefault();
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
