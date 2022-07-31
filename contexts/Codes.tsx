//React
import React, { createContext, useState, useContext, ReactNode } from "react";

//Code Utils
import defaultModel from "../Code/defaultModel";
import getFuncTypes from "../Code/getFuncTypes";
import mountStyle from "../Code/mountStyle";
import mountVariable from "../Code/mountVariables";

//Types
import { Funcs } from "../types/Funcs";

type CodesContextData = {
  codeMain: string;
  setCodeMain: (param: string) => void;

  codeHeader: string;
  setCodeHeader: (param: string) => void;

  codeTab: string;
  setCodeTab: (param: string) => void;

  getCode: (param: string) => string;

  addInCode: (element: Funcs, selected: Funcs, mac: string | undefined) => void;

  setCode: (contents: string | undefined, param: string) => void;

  clearCode: () => void;

  codeImports: string;
  setCodeImports: (param: string) => void;

  codeStyles:string;
  setCodeStyles: (param: string) => void;

  codeVariable:string;
  setCodeVariable: (param: string) => void;

  onToggleCode: boolean;
  setOnToggleCode: (param: boolean) => void;

  codeStylesGenerator: (nodes:Funcs) => void;
  deleteCodeStyleElement: (element:Funcs) => void;
  deleteAllCodeStyles: () => void;

  codeVariableGenerator: (element:Funcs) => void;
  deleteCodeVariableElement: (element:Funcs) => void;
  deleteAllCodeVariables: () => void;

  codeImportGenerator: (nodes:Funcs) => void;
  deleteAllCodeImports: () => void;
};

type CodesProviderProps = {
  children: ReactNode;
};

export const CodesContext = createContext({} as CodesContextData);

function CodesProvider({ children }: CodesProviderProps) {
  const [codeHeader, setCodeHeader] = useState<string>("space");
  const [codeMain, setCodeMain] = useState<string>("space");
  const [codeTab, setCodeTab] = useState<string>("space");

  const [onToggleCode, setOnToggleCode] = useState<boolean>(false);

  const [codeImports, setCodeImports] = useState<string>('');
  const [codeStyles, setCodeStyles] = useState<string>(defaultModel('styles'));
  const [codeVariable, setCodeVariable] = useState<string>(defaultModel('variables'));

  function addInCode(element: Funcs, selected: Funcs, mac: string | undefined) {
    if (selected.children && mac) {
      const target =
        selected.children.length > 0
          ? getFuncTypes(
              selected.children[selected.children.length - 1],
              "last"
            )
          : "";

      const source = getFuncTypes(selected, "first");
      const newValue = source.replace(
        "[children]",
        getFuncTypes(element, "first")
      );

      if (selected.children.length === 0) {
        if (getCode(mac) === "space") {
          setCode(source.replace(source, newValue), mac);
        } else {
          setCode(getCode(mac).replace(source, newValue), mac);
        }
      } else {
        setCode(
          getCode(mac).replace(target, target + getFuncTypes(element, "first")),
          mac
        );
      }
    }
  }

  function getCode(param: string) {
    if (param === "header") {
      return codeHeader;
    } else if (param === "main") {
      return codeMain;
    }
    return codeTab;
  }

  function setCode(contents: string | undefined, param: string) {
    if (contents !== undefined) {
      switch (param) {
        case "header":
          setCodeHeader(contents);
        break;
        case "main":
          setCodeMain(contents);
        break;
        default:
          setCodeTab(contents);
        break;
      }
    }
  }

  function clearCode() {
    setCode("", "header");
    setCode("", "main");
    setCode("", "tab");
  }

  let accStyles = codeStyles;
  function codeStylesGenerator (nodes:Funcs) {
    accStyles += '\n'+mountStyle(nodes);
    setCodeStyles(accStyles);
  }

  function deleteCodeStyleElement (element:Funcs) {
    setCodeStyles(codeStyles.replace(mountStyle(element), ''));
  }

  function deleteAllCodeStyles () {
    setCodeStyles(defaultModel('styles'));
  }

  let accVariables = codeVariable;
  function codeVariableGenerator (element:Funcs) {
    accVariables += '\n'+mountVariable(element);
    setCodeVariable(accVariables);
  }

  function deleteCodeVariableElement (element:Funcs) {
    setCodeVariable(codeVariable.replace('\n'+mountVariable(element), ''));
  }

  function deleteAllCodeVariables () {
    setCodeVariable('');
  }

  let accImports = codeImports;
  function codeImportGenerator (nodes:Funcs) {
    if (nodes.name !== undefined) {
    const ElementName = nodes.name.at(0)?.toUpperCase()+nodes.name.substring(1).replace(/ /g, "");

    if (codeImports.indexOf(ElementName+',') === -1) {
      accImports += ElementName+',';
      setCodeImports(accImports);
    }

    {Array.isArray(nodes.children)
      ? nodes.children.map((node) => nodes.type && codeImportGenerator(node))
      : null}
    }
  }

  function deleteAllCodeImports () {
    setCodeImports('');
  }

  return (
    <CodesContext.Provider
      value={{
        addInCode,
        setCode,
        clearCode,
        getCode,
        codeMain,
        setCodeMain,
        codeHeader,
        setCodeHeader,
        codeTab,
        setCodeTab,
        codeStylesGenerator,
        codeStyles, setCodeStyles,
        deleteCodeStyleElement,
        deleteAllCodeStyles,
        codeVariableGenerator,
        deleteCodeVariableElement,
        deleteAllCodeVariables,
        codeVariable,setCodeVariable,
        codeImportGenerator,
        deleteAllCodeImports,
        codeImports,setCodeImports,
        onToggleCode,setOnToggleCode,
      }}
    >
      {children}
    </CodesContext.Provider>
  );
}

function useCodes() {
  const context = useContext(CodesContext);
  return context;
}

export { CodesProvider, useCodes };
