//React
import { useFuncs } from '../../../contexts/Functionalities';

//Utils
import GetSection from '../../../utils/GetSection';

//Contexts
import React from 'react';

export default function ModelSetting () {
  const { selected } = useFuncs();
  return (
   <div className="model-settings"> 
      {GetSection((selected !== undefined) ? selected.type : '')}
   </div>
  );
}