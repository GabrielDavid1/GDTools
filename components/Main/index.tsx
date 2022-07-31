//React
import React, { useCallback, useEffect } from "react";

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
  const { onToggleCode, setOnToggleCode, setCodeImports, codeImportGenerator } = useCodes();

  useEffect(() => {
    setCodeImports('');
    setOnToggleCode(!onToggleCode);
  }, [funcs]);

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

  function handleToggle () {
    codeImportGenerator(funcs[0]);
    codeImportGenerator(funcs[1]);
    codeImportGenerator(funcs[2]);
    setOnToggleCode(!onToggleCode);
  }

  return (
    <main className="content">
      <span className="code-view">
        <a onClick={handleToggle}>
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
