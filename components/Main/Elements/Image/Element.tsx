import React, { useState } from "react";
import ImageArea from "./ImageArea";

interface Props {
  dimension: {
    width: string;
    height: string;
  };
}

export default function Element({ dimension }: Props) {
  const [image, setImage] = useState<any>("");
  console.log(dimension)
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
          width="100%"
          height="100%"
          maxWidth={dimension.width}
          maxHeight={dimension.height}
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
