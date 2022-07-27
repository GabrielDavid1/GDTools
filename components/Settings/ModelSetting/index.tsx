//React
import { useFuncs } from "../../../contexts/Functionalities";

//Utils
import GetSection from "../../../utils/GetSection";

//Contexts
import React from "react";

export default function ModelSetting() {
  const { selected } = useFuncs();
  return (
    <div className="model-settings">
      {selected.type !== undefined ? (
        GetSection(selected.type)
      ) : (
        <h2> No element selected </h2>
      )}
    </div>
  );
}
