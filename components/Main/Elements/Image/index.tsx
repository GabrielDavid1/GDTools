//React
import React, { useState } from "react";

//Components
import ImageArea from "./ImageArea";

//Types
import { Config, Funcs } from "../../../../types/Funcs";

//Contexts
import { useFuncs } from "../../../../contexts/Functionalities";
import { useCodes } from "../../../../contexts/Codes";

//Code
import getFuncTypes from "../../../../Code/getFuncTypes";
interface Props {
  config: Config;
}

export default function ImageView({ config }: Props) {
  const [image, setImage] = useState<any>("");

  const { funcs, setFuncs, selected } = useFuncs();
  const { setCode, getCode } = useCodes();

  function handleCode (oldFunc:string, newFunc:Funcs) {
    const mac = (newFunc.mac) ? newFunc?.mac : '';
    const oldElement = getFuncTypes(JSON.parse(oldFunc), 'first');
    setCode(getCode(mac).replace(oldElement, getFuncTypes(newFunc, 'first')), mac);
  }

  const imageHandler = (e: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
          const oldFunc = JSON.stringify(selected);
          const newFunc = JSON.parse(oldFunc);

          newFunc.config.sourceImage = typeof reader.result === "string" ? reader.result : "";
          handleCode(oldFunc, newFunc);
          
          selected.config = newFunc.config;
          
          setFuncs([...funcs]);
          setImage(typeof reader.result === "string" ? reader.result : "");
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="image">
      {image !== "" && (
        <ImageArea
          src={image}
          width={`${config?.width}`}
          height={`${config?.height}`}
          marginLeft={`${config?.marginLeft}`}
          marginRight={`${config?.marginRight}`}
          marginTop={`${config?.marginTop}`}
          marginBottom={`${config?.marginBottom}`}
        />
      )}
      {image === "" && <label htmlFor="upload"> upload </label>}
      <input
        type="file"
        accept="image/*"
        name="image-upload"
        id="upload"
        onChange={imageHandler}
      />
    </div>
  );
}
