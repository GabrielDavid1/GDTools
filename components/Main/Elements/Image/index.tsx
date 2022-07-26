/* React */
import React from "react";

/* Components */
import Element from "./Element";
import { Config } from "../../../../types/Funcs";

interface Props {
  config:Config;
}

export const ImageView = ({ config }:Props) => {
  return <Element config={config} />;
}