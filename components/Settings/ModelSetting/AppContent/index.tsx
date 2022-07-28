//React
import React from "react";

//Components
import ColorArea from "../Default/ColorArea";
import Dimension from "../Default/Dimension";
import Direction from "../Default/Direction";
import Gap from "../Default/Gap";
import PositionHorizontal from "../Default/PositionHorizontal";
import PositionVertical from "../Default/PositionVertical";
import ScrollArea from "../Default/ScrollArea";
interface Props {
  title:string;
}

export default function AppContent({ title }:Props) {
  return (
    <>
      <h2> {title} </h2>
      <ColorArea />
      <Dimension width={true} />
      <Direction />
      <ScrollArea />
      <PositionHorizontal />
      <PositionVertical />
      <Gap />
    </>
  );
}
