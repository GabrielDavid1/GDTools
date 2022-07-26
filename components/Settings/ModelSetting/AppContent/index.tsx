//React
import React from "react";

//Components
import ColorArea from "../Default/ColorArea";
import Dimension from "../Default/Dimension";

interface Props {
  title:string;
}

export default function AppContent({ title }:Props) {
  return (
    <>
      <h2> {title} </h2>
      <ColorArea />
      <Dimension width={true} />
    </>
  );
}
