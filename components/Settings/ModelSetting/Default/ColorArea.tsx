/* Componente Framework react color */
import React from 'react';

//Components
import { TwitterPicker } from 'react-color';

//Contexts
import { useCodes } from '../../../../contexts/Codes';
import { useFuncs } from '../../../../contexts/Functionalities';

//Types
import { Funcs } from '../../../../types/Funcs';
import getFuncTypes from '../../../../Code/getFuncTypes';

//Code
import mountStyle from '../../../../Code/mountStyle';

export default function ColorArea () {
  const { funcs, setFuncs, selected} = useFuncs();
  const { getCode, setCode, codeStyles, setCodeStyles  } = useCodes();

  function handleCode (oldFunc:string, newFunc:Funcs) {
    const mac = (newFunc.mac) ? newFunc?.mac : '';
    const oldElement = getFuncTypes(JSON.parse(oldFunc), 'first');
    setCode(getCode(mac).replace(oldElement, getFuncTypes(newFunc, 'first')), mac);
  }

  function handleChangeStyle (oldStyle:Funcs, newStyle:Funcs) { 
    setCodeStyles(codeStyles.replace(mountStyle(oldStyle), mountStyle(newStyle)));
  }

  function handleChange (event = {} as React.ChangeEvent<HTMLInputElement>, color = '#fff') {
    if (selected.config !== undefined) {
        const oldStyles = selected;

        const oldFunc = JSON.stringify(selected);
        const newFunc = JSON.parse(oldFunc);

        newFunc.config.bgColor = color;
        handleCode(oldFunc, newFunc);

        handleChangeStyle(oldStyles, newFunc);

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