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
  //const teste = '<Main>space<Div3>[children]</Div3>space<Div4>[children]</Div4>space<Div5>[children]</Div5>space</Main>'.replace( /\<\/Div3>/gi, "\n" )
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
          flexDirection={`${node?.config?.flexDirection}`}
          justifyContent={`${node?.config?.justifyContent}`}
          alignItems={`${node?.config?.alignItems}`}
          gap={`${node?.config?.gap}`}
          isScrollX={node?.config?.isScrollX}
          isScrollY={node?.config?.isScrollY}
        >
          {children}
        </AppHeader>
      );
    case "main":
      return (
        <AppBody
          height={`${node?.config?.height}`}
          bgColor={`${node?.config?.bgColor}`}
          flexDirection={`${node?.config?.flexDirection}`}
          justifyContent={`${node?.config?.justifyContent}`}
          alignItems={`${node?.config?.alignItems}`}
          gap={`${node?.config?.gap}`}
          isScrollX={node?.config?.isScrollX}
          isScrollY={node?.config?.isScrollY}
        >
          {children}
        </AppBody>
      );
    case "tab":
      return (
        <AppTab 
          height={`${node?.config?.height}`}
          bgColor={`${node?.config?.bgColor}`}
          flexDirection={`${node?.config?.flexDirection}`}
          justifyContent={`${node?.config?.justifyContent}`}
          alignItems={`${node?.config?.alignItems}`}
          gap={`${node?.config?.gap}`}
          isScrollX={node?.config?.isScrollX}
          isScrollY={node?.config?.isScrollY}
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
