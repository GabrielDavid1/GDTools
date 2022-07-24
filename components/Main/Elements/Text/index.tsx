/* React */
import React from "react";

/* Components */
import { ElementText } from "./ElementText";

/* Types */
import { configText } from "../../../../types/Funcs";

interface PropsComponentes {
  dimensionNode: {
    width: number;
    height: number;
  }
}

export const TextView = ({ dimensionNode }: PropsComponentes) => {
  return (
      <ElementText config={configText} />
  );
}