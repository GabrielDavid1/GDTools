//React
import React, { useState } from "react";

//Components
import ImageArea from "./ImageArea";

//Types
import { Config } from "../../../../types/Funcs";
interface Props {
  config:Config;
}

export default function Element({ config }:Props) {
  const [image, setImage] = useState<any>("");

  const imageHandler = (e: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(typeof reader.result === "string" ? reader.result : "");
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="image">
      {image !== "" && (
        <ImageArea
          width={`${config?.width}`}
          height={`${config?.height}`}
          src={image}
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
