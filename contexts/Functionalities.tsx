//React
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

//Types
import { Config, Funcs } from "../types/Funcs";

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

  editNodeConfig: (oldConfig: Config, newConfig: Config) => void;

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

  useEffect(() => {
    setFuncs([
      {
        id: "0",
        name: "Header",
        type: "header",
        color: "red",
        isRoot: true,
        config: {
          width: "100%",
          height: "25%",
          bgColor: "#f8f8f8",
        },
        children: [],
      },
      {
        id: "1",
        name: "Main",
        type: "main",
        children: [
          {
            id: "3",
            name: "testando",
            type: "svg",
            color: "green",
            isRoot: false,
            config: {
              fontSize: "16px",
              width: "10%",
              height: "10%",
              bgColor: "orange",
              marginLeft: "0px",
              marginTop: "0px",
              marginRight: "0px",
              marginBottom: "0px",
              border: "none",
              justifyContent: "center",
              alignItems: "center",
              isScrollY: false,
              isScrollX: false,
              svgName: "books",
            },
            children: [],
          },
        ],
        color: "green",
        isRoot: true,
        config: {
          bgColor: "#dfdfdf",
          width: "100%",
          height: "100%",
        },
      },
      {
        id: "2",
        name: "Tab Nav",
        type: "tab",
        children: [],
        color: "purple",
        isRoot: true,
        config: {
          bgColor: "#c4c4c4",
          width: "100%",
          height: "15%",
        },
      },
    ]);
  }, []);

  function addNode(name: string, type: string, config:Config) {
    if (selected.children === undefined) {
        setFuncs([
          ...funcs,
          {
            id: (lengthFuncs + 1).toString(),
            name,
            type,
            isRoot:false,
            color: "#" + Math.floor(Math.random() * 16777215).toString(16),
            config:config,
            children: [],
          },
        ]);
        setLengthFuncs(lengthFuncs + 1);
    } else if (selected.children !== undefined) {
        selected.children.push({
          id: (lengthFuncs + 1).toString(),
          name: name,
          type: type,
          isRoot: false,
          color: selected.color,
          config:config,
          children: [],
        });
        setLengthFuncs(lengthFuncs + 1);
    }
  }

  function editNode(obj: Funcs, name: string) {
    let newObj = { ...obj };
    newObj.name = name;

    const target = JSON.stringify(obj);
    const base = JSON.stringify(funcs);

    const result = JSON.parse(base.replace(target, JSON.stringify(newObj)));
    setFuncs(result);
  }

  function deleteNode(obj: Funcs) {
    const base = JSON.stringify(funcs);

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

  function editNodeConfig(oldConfig: Funcs, newConfig: Funcs) {
    const target = JSON.stringify(oldConfig);
    const base = JSON.stringify(funcs);
    const result = JSON.parse(base.replace(target, JSON.stringify(newConfig)));
    setFuncs(result); 
  }

  function deleteAll() {
    setFuncs([
      {
        id: "0",
        name: "Header",
        type: "header",
        color: "red",
        isRoot: true,
        config: {
          width: "100%",
          height: "25%",
          bgColor: "#f8f8f8",
        },
        children: [],
      },
      {
        id: "1",
        name: "Main",
        type: "main",
        color: "green",
        isRoot: true,
        config: {
          bgColor: "#dfdfdf",
          width: "100%",
          height: "100%",
        },
        children: [],
      },
      {
        id: "2",
        name: "Tab Nav",
        type: "tab",
        color: "purple",
        isRoot: true,
        config: {
          bgColor: "#c4c4c4",
          width: "100%",
          height: "15%",
        },
        children: [],
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
        editNodeConfig,
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
