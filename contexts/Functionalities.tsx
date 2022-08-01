//React
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import getFuncTypes from "../Code/getFuncTypes";

//Code
import mountVariable from "../Code/mountVariables";

//Types
import { Config, Funcs } from "../types/Funcs";

//Contexts
import { useCodes } from "./Codes";

type FunctionalitiesContextData = {
  funcs: Funcs[];
  setFuncs: (param: Funcs[]) => void;

  selected: Funcs;
  setSelected: (param: Funcs) => void;

  lengthFuncs: number;
  setLengthFuncs: React.Dispatch<React.SetStateAction<number>>;

  onToggle: boolean;
  setOnToggle: React.Dispatch<React.SetStateAction<boolean>>;

  touched: boolean;
  setTouched: React.Dispatch<React.SetStateAction<boolean>>;

  addNode: (name: string, type: string, config: Config) => void;
  editNode: (obj: Funcs, name: string) => void;
  deleteNode: (obj: Funcs) => void;
  deleteAll: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const FunctionalitiesContext = createContext(
  {} as FunctionalitiesContextData
);

function FunctionalitiesProvider({ children }: AuthProviderProps) {
  const [funcs, setFuncs] = useState<Funcs[]>([]);

  const [selected, setSelected] = useState<Funcs>({} as Funcs);

  const [lengthFuncs, setLengthFuncs] = useState(2);
  const [onToggle, setOnToggle] = useState<boolean>(true);

  const [touched, setTouched] = useState<boolean>(false);

  const {
    clearCode,
    setCode,
    addInCode,
    getCode,
    codeStylesGenerator,
    deleteCodeStyleElement,
    deleteAllCodeStyles,
    codeVariableGenerator,
    deleteCodeVariableElement,
    deleteAllCodeVariables,
    codeVariable,
    setCodeVariable,
  } = useCodes();

  useEffect(() => {
    const header = {
      id: "0",
      name: "Header",
      type: "header",
      color: "#fab68a",
      isRoot: true,
      mac: "header",
      config: {
        width: "100%",
        height: "25%",
        bgColor: "#f8f8f8",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        isScrollX: false,
        isScrollY: false,
        gap: "0px",
      },
      children: [],
    };

    const main = {
      id: "1",
      name: "Main",
      type: "main",
      mac: "main",
      children: [],
      color: "#ff15f1",
      isRoot: true,
      config: {
        bgColor: "#dfdfdf",
        width: "100%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        isScrollX: false,
        isScrollY: false,
        gap: "0px",
      },
    };

    const tab = {
      id: "2",
      name: "Tab Nav",
      type: "tab",
      mac: "tab",
      children: [],
      color: "#b59de9",
      isRoot: true,
      config: {
        bgColor: "#c4c4c4",
        width: "100%",
        height: "15%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        isScrollX: false,
        isScrollY: false,
        gap: "0px",
      },
    };

    setFuncs([header, main, tab]);
  }, []);

  function addNode(name: string, type: string, config: Config) {
    if (selected.children !== undefined) {
        const element = {
          id: (lengthFuncs + 1).toString(),
          name: name + String(lengthFuncs + 1),
          type: type,
          isRoot: false,
          color: selected.color,
          mac: selected.mac,
          config: config,
          children: [],
        };

        if (type === "scrollList" || type === "input") codeVariableGenerator(element);
        if (type !== "scrollList") codeStylesGenerator(element);
        
        addInCode(element, selected, selected.mac);

        selected.children.push(element);
        setFuncs([...funcs]);
        
        setLengthFuncs(lengthFuncs + 1);
    }
  }

  function editNode(obj: Funcs, name: string) {
    const mac = obj.mac ? obj.mac : "";

    const actualNode = JSON.stringify(obj);

    const oldElement = getFuncTypes(JSON.parse(actualNode), "first");
    const oldVariable = mountVariable(obj);

    let newObj = { ...obj };
    newObj.name = name;

    if (obj.type === "scrollList" || obj.type === "input")
      setCodeVariable(codeVariable.replace(oldVariable, mountVariable(newObj)));

    setCode(
      getCode(mac).replace(oldElement, getFuncTypes(newObj, "first")),
      mac
    );

    const target = JSON.stringify(obj);
    const base = JSON.stringify(funcs);

    const result = JSON.parse(base.replace(target, JSON.stringify(newObj)));

    setFuncs(result);
  }

  function deleteNode(obj: Funcs) {
    const base = JSON.stringify(funcs);
    const mac = obj.mac ? obj.mac : "";

    const targets = {
      top: JSON.stringify(obj) + ",",
      mid: "," + JSON.stringify(obj),
      bottom: JSON.stringify(obj),
    };

    try {
      const converted = base.replace(targets.mid, "");
      if (converted !== base) {
        setFuncs(JSON.parse(converted));
        setCode(getCode(mac).replace(getFuncTypes(obj, "first"), ""), mac);
      } else {
        const converted2 = base.replace(targets.top, "");
        if (converted2 !== base) {
          setFuncs(JSON.parse(converted2));
          setCode(getCode(mac).replace(getFuncTypes(obj, "first"), ""), mac);
        } else {
          const converted3 = base.replace(targets.bottom, "");
          setFuncs(JSON.parse(converted3));
          setCode(
            getCode(mac).replace(getFuncTypes(obj, "first"), "[children]"),
            mac
          );
        }
      }
      deleteCodeStyleElement(obj);
      deleteCodeVariableElement(obj);
    } catch (error) {}
  }

  function deleteAll() {
    setFuncs([
      {
        id: "0",
        name: "Header",
        type: "header",
        mac: "header",
        color: "#fab68a",
        isRoot: true,
        config: {
          width: "100%",
          height: "25%",
          bgColor: "#f8f8f8",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          isScrollX: false,
          isScrollY: false,
          gap: "0px",
        },
        children: [],
      },
      {
        id: "1",
        name: "Main",
        type: "main",
        mac: "main",
        children: [],
        color: "#ff15f1",
        isRoot: true,
        config: {
          bgColor: "#dfdfdf",
          width: "100%",
          height: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          isScrollX: false,
          isScrollY: false,
          gap: "0px",
        },
      },
      {
        id: "2",
        name: "Tab Nav",
        type: "tab",
        mac: "tab",
        children: [],
        color: "#b59de9",
        isRoot: true,
        config: {
          bgColor: "#c4c4c4",
          width: "100%",
          height: "15%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          isScrollX: false,
          isScrollY: false,
          gap: "0px",
        },
      },
    ]);
    clearCode();
    deleteAllCodeStyles();
    deleteAllCodeVariables();
  }

  return (
    <FunctionalitiesContext.Provider
      value={{
        funcs,
        setFuncs,
        selected,
        setSelected,
        onToggle,
        setOnToggle,
        lengthFuncs,
        setLengthFuncs,
        addNode,
        deleteAll,
        editNode,
        deleteNode,
        touched,
        setTouched,
      }}
    >
      {children}
    </FunctionalitiesContext.Provider>
  );
}

function useFuncs() {
  const context = useContext(FunctionalitiesContext);
  return context;
}

export { FunctionalitiesProvider, useFuncs };
