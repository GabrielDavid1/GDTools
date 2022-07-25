/* React */
import React from "react";

/* Components */
import Element from "./Element";

interface Props {
  dimensionNode: {
    width: string;
    height: string;
  };
}

export const ImageView = ({ dimensionNode }:Props) => {
  return <Element dimension={dimensionNode} />;
}