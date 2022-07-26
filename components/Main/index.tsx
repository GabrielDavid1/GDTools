//React
import React, { useCallback } from "react";

//Styled Components
import { AppBody, AppHeader, AppTab } from "./styles";

//Types
import { Config, Funcs } from "../../types/Funcs";

//Contexts
import { useFuncs } from "../../contexts/Functionalities";

//Components
import Reference from "./Reference";

interface Props {
  config: Config | undefined;
}

export default function Main({ config }: Props) {
  const { funcs } = useFuncs();

  const renderer = useCallback(
    (nodes: Funcs) =>
      (nodes !== undefined) && (
        <Reference node={nodes}>
          {Array.isArray(nodes.children)
            ? nodes.children.map((node) => nodes.type && renderer(node))
            : null}
        </Reference>
      ),
    [funcs]
  );

  return (
    <main className="content">
      <span className="code-view">
        <a>
          <p> View code </p>
        </a>
      </span>
      <div className="app-content">
        <AppHeader>
          {renderer(funcs[1])}  
        </AppHeader>
        <AppBody> 
          {renderer(funcs[0])}
        </AppBody>
        <AppTab>
          {renderer(funcs[2])}
        </AppTab>
      </div>
    </main>
  );
}
