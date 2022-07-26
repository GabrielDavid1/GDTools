//React
import React from "react";

//Types
import { Config, Funcs } from "../../../types/Funcs";

//Utils
import GetElement from "../../../utils/GetElement";

//Components
import { DivView } from "../Elements/Div";
import { ScrollListView } from "../Elements/ScrollList";
import { AppBody, AppHeader, AppTab } from "../styles";
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

    case "header":
      return (
        <AppHeader 
          height={`${node?.config?.height}`}
          bgColor={`${node?.config?.bgColor}`}
        >
          {children}
        </AppHeader>
      );
    case "main":
      return (
        <AppBody
          height={`${node?.config?.height}`}
          bgColor={`${node?.config?.bgColor}`}  
        >
          {children}
        </AppBody>
      );
    case "tab":
      return (
        <AppTab 
          height={`${node?.config?.height}`}
          bgColor={`${node?.config?.bgColor}`}
        >
          {children}
        </AppTab>
      );

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
