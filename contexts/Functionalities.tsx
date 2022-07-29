//React
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import getFuncTypes from "../Code/getFuncTypes";

//Types
import { Config, Funcs } from "../types/Funcs";

type FunctionalitiesContextData = {
  funcs: Funcs[];
  setFuncs: (param: Funcs[]) => void;

  selected: Funcs;
  setSelected: (param: Funcs) => void;

  codeMain: string;
  setCodeMain: (param: string) => void;

  lengthFuncs: number;
  setLengthFuncs: React.Dispatch<React.SetStateAction<number>>;

  onToggle: boolean;
  setOnToggle: React.Dispatch<React.SetStateAction<boolean>>;

  touched: boolean;
  setTouched: React.Dispatch<React.SetStateAction<boolean>>;

  addInCode: (element:Funcs) => void;

  addNode: (name: string, type: string, config:Config) => void;
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

  const [codeMain, setCodeMain] = useState<string>('');

  useEffect(() => {
    setFuncs([
      {
        id: "0",
        name: "Header",
        type: "header",
        color: "#fab68a",
        isRoot: true,
        config: {
          width: "100%",
          height: "25%",
          bgColor: "#f8f8f8",
          flexDirection:'row',
          justifyContent: "center",
          alignItems: "center",
          isScrollX: false,
          isScrollY: false,
          gap: '0px',
        },
        children: [],
      },
      {
        id: "1",
        name: "Main",
        type: "main",
        children: [],
        color: "#ff15f1",
        isRoot: true,
        config: {
          bgColor: "#dfdfdf",
          width: "100%",
          height: "100%",
          flexDirection:'row',
          justifyContent: "center",
          alignItems: "center",
          isScrollX: false,
          isScrollY: false,
          gap: '0px',
        },
      },
      {
        id: "2",
        name: "Tab Nav",
        type: "tab",
        children: [],
        color: "#b59de9",
        isRoot: true,
        config: {
          bgColor: "#c4c4c4",
          width: "100%",
          height: "15%",
          flexDirection:'row',
          justifyContent: "center",
          alignItems: "center",
          isScrollX: false,
          isScrollY: false,
          gap: '0px',
        },
      },
    ]);
  }, []);

  function addNode(name: string, type: string, config:Config) {
      if (selected.children !== undefined) {
          const element = {
            id: (lengthFuncs + 1).toString(),
            name: name+String((lengthFuncs + 1)),
            type: type,
            isRoot: false,
            color: selected.color,
            config:config,
            children: [],
          };
          addInCode(element);
          selected.children.push(element);
          setLengthFuncs(lengthFuncs + 1);
        }
  }

  function addInCode (element:Funcs) {
    if (selected.children !== undefined) {
        const target = (selected.children.length > 0) ? getFuncTypes(selected.children[selected.children.length-1], 'last') : '';
        
        const source = getFuncTypes(selected, 'first');
        const newValue = source.replace('[children]', getFuncTypes(element, 'first'));

        if (selected.children.length === 0) {
          if(codeMain === '') {
            setCodeMain(source.replace(source, newValue));
          } else {
            setCodeMain(codeMain.replace(source, newValue));
          }
        } else {
          setCodeMain(codeMain.replace(target, target+getFuncTypes(element, 'first')));
        }
    }
  }

  function editNode(obj: Funcs, name: string) {
    const actualNode = JSON.stringify(obj);
    const oldElement = getFuncTypes(JSON.parse(actualNode), 'first');
  
    let newObj = { ...obj};
    newObj.name = name;
    
    setCodeMain(codeMain.replace(oldElement,  getFuncTypes(newObj, 'first')));

    const target = JSON.stringify(obj);
    const base = JSON.stringify(funcs);

    const result = JSON.parse(base.replace(target, JSON.stringify(newObj)));

    setFuncs(result);
  }

  function deleteNode(obj: Funcs) {
    const base = JSON.stringify(funcs);

    setCodeMain(codeMain.replace(getFuncTypes(obj, 'first'), ""));

    const targets = {
      one: "," + JSON.stringify(obj),
      two: JSON.stringify(obj) + ",",
      three: JSON.stringify(obj),
    };

    try {
      const converted = base.replace(targets.one, "");
      if (converted !== base) {
        setFuncs(JSON.parse(converted));
      } else {
        const converted2 = base.replace(targets.two, "");
        if (converted2 !== base) {
          setFuncs(JSON.parse(converted2));
        } else {
          const converted3 = base.replace(targets.three, "");
          setFuncs(JSON.parse(converted3));
        }
      }
    } catch (error) {}

    setLengthFuncs(lengthFuncs - 1);
  }

  function deleteAll() {
    setFuncs([
      {
        id: "0",
        name: "Header",
        type: "header",
        color: "#fab68a",
        isRoot: true,
        config: {
          width: "100%",
          height: "25%",
          bgColor: "#f8f8f8",
          flexDirection:'row',
          justifyContent: "center",
          alignItems: "center",
          isScrollX: false,
          isScrollY: false,
          gap: '0px',
        },
        children: [],
      },
      {
        id: "1",
        name: "Main",
        type: "main",
        children: [],
        color: "#ff15f1",
        isRoot: true,
        config: {
          bgColor: "#dfdfdf",
          width: "100%",
          height: "100%",
          flexDirection:'row',
          justifyContent: "center",
          alignItems: "center",
          isScrollX: false,
          isScrollY: false,
          gap: '0px',
        },
      },
      {
        id: "2",
        name: "Tab Nav",
        type: "tab",
        children: [],
        color: "#b59de9",
        isRoot: true,
        config: {
          bgColor: "#c4c4c4",
          width: "100%",
          height: "15%",
          flexDirection:'row',
          justifyContent: "center",
          alignItems: "center",
          isScrollX: false,
          isScrollY: false,
          gap: '0px',
        },
      },
    ]);
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
        addInCode,
        addNode,
        deleteAll,
        editNode,
        deleteNode,
        touched,
        setTouched,
        codeMain,
        setCodeMain,
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
