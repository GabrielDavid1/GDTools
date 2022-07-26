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

//Contexts
import { useFuncs } from "../../../contexts/Functionalities";
interface Props {
  node: Funcs;
  children?: React.ReactNode;
}

export default function Reference({ node, children }: Props) {
  const { setOnToggle, setSelected } = useFuncs();

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
          onClick={() => {
            setOnToggle(true);
            setSelected(node.config as Config);
          }}
        >
          {children}
        </AppHeader>
      );
    case "main":
      return (
        <AppBody
          onClick={() => {
            setOnToggle(true);
            setSelected(node.config as Config);
          }}
        >
          {children}
        </AppBody>
      );
    case "tab":
      return (
        <AppTab
          onClick={() => {
            setOnToggle(true);
            setSelected(node.config as Config);
          }}
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
