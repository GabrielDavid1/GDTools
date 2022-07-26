//React
import React from "react";
import { useFuncs } from "../../../../contexts/Functionalities";

//Components
import ColorArea from "../Default/ColorArea";
import Dimension from "../Default/Dimension";

interface Props {
  title:string;
}

export default function AppContent({ title }:Props) {
  const { selected } = useFuncs();
  console.log(selected);
  return (
    <>
      <h2> {title} </h2>
      <ColorArea />
      <Dimension />
    </>
  );
}
