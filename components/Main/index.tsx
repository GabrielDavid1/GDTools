//React
import React, { useCallback } from "react";

//Types
import { Funcs } from "../../types/Funcs";

//Contexts
import { useCodes } from "../../contexts/Codes";
import { useFuncs } from "../../contexts/Functionalities";

//Components
import Code from "./Code";
import Reference from "./Reference";

export default function Main() {
  const { funcs } = useFuncs();
  const { onToggleCode, setOnToggleCode } = useCodes();

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
        <a onClick={() => setOnToggleCode(!onToggleCode)}>
          <p> View code </p>
        </a>
      </span>
      <div className="app-content">
        {!onToggleCode && renderer(funcs[0])} 
        {!onToggleCode && renderer(funcs[1])}
        {!onToggleCode && renderer(funcs[2])}
        {onToggleCode && <Code />}
      </div>
    </main>
  );
}
