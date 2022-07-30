//React
import React, { createContext, useState, useContext, ReactNode } from "react";
import getFuncTypes from "../Code/getFuncTypes";

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
};

type CodesProviderProps = {
  children: ReactNode;
};

export const CodesContext = createContext({} as CodesContextData);

function CodesProvider({ children }: CodesProviderProps) {
  const [codeHeader, setCodeHeader] = useState<string>("space");
  const [codeMain, setCodeMain] = useState<string>("space");
  const [codeTab, setCodeTab] = useState<string>("space");
 
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
