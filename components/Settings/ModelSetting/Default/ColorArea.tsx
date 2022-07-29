/* Componente Framework react color */
import React from 'react';

//Components
import { TwitterPicker } from 'react-color';

//Contexts
import getFuncTypes from '../../../../Code/getFuncTypes';
import { useFuncs } from '../../../../contexts/Functionalities';

//Types
import { Funcs } from '../../../../types/Funcs';

export default function ColorArea () {
  const { funcs, setFuncs, selected, codeMain, setCodeMain } = useFuncs();

  function handleCode (oldFunc:string, newFunc:Funcs) {
    const oldElement = getFuncTypes(JSON.parse(oldFunc), 'first');
    setCodeMain(codeMain.replace(oldElement,  getFuncTypes(newFunc, 'first')));
  }

  function handleChange (event = {} as React.ChangeEvent<HTMLInputElement>, color = '#fff') {
    if (selected.config !== undefined) {
        const oldFunc = JSON.stringify(selected);
        const newFunc = JSON.parse(oldFunc);

        newFunc.config.bgColor = color;
        handleCode(oldFunc, newFunc);

        selected.config = newFunc.config;
        setFuncs([...funcs]);
    }
    event.preventDefault();
  }

  return (
    <div className="color-area">
      <TwitterPicker 
        width="100%"
        color={selected?.config?.bgColor} 
        onChange={(updatedColor, e) => handleChange(e, updatedColor.hex)} 
      />
    </div>
  )
}