/* React */
import React from "react";

/* Components */
import { ElementText } from "./ElementText";

/* Types */
import { Config } from "../../../../types/Funcs";

interface Props {
  config:Config;
}

export const TextView = ({ config }: Props) => {
  return (
      <ElementText config={config} />
  );
}