//React
import React from "react";

//Types
import { Config, Funcs } from "../../../types/Funcs";

//Utils
import GetElement from "../../../utils/GetElement";

import { DivView } from "../Elements/Div";
import { ScrollListView } from "../Elements/ScrollList";

interface Props {
  node: Funcs;
  children?: React.ReactNode;
}

export default function Reference({ node, children }: Props) {
  switch (node.type) {
    case "text":
      return GetElement(node.type, node.config as Config);
    case "svg":
      return GetElement(node.type, node.config as Config);
    case "image":
      return GetElement(node.type, node.config as Config);
    case "button":
      return GetElement(node.type, node.config as Config);
    case "input":
      return GetElement(node.type, node.config as Config);
    case "scrollList":
    return (
       <ScrollListView config={node.config as Config}>
           {children}
       </ScrollListView>
    );
    default:
      return <DivView config={node.config}>{children}</DivView>;
  }
}
