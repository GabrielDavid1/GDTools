//React
import React, { useCallback } from "react";

//Types
import { Funcs } from "../../types/Funcs";

//Contexts
import { useFuncs } from "../../contexts/Functionalities";

//Components
import Reference from "./Reference";

export default function Main() {
  const { funcs } = useFuncs();

  const renderer = useCallback(
    (nodes: Funcs) =>
      (nodes !== undefined) && (
        <Reference node={nodes} key={nodes.id}>
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
        {renderer(funcs[0])}  
        {renderer(funcs[1])}
        {renderer(funcs[2])}

      </div>
    </main>
  );
}
