  //React
  import React, {
    createContext,
    useState,
    useContext,
    ReactNode,
    useEffect
  } from "react";
  
  //Types
  import { Config, Funcs } from "../types/Funcs";

  type FunctionalitiesContextData = {
    funcs: Funcs[];
    setFuncs: (param: Funcs[]) => void;

    selected: Config;
    setSelected: (param: Config) => void;

    lengthFuncs:number;
    setLengthFuncs: React.Dispatch<React.SetStateAction<number>>;

    onToggle: boolean;
    setOnToggle: React.Dispatch<React.SetStateAction<boolean>>;

    editNodeConfig: (obj:Funcs, oldConfig:Config, config:Config) => void;

    addNode: (name:string, type:string, param:string, func:Funcs) => void;
    editNode: (obj:Funcs, name:string) => void;
    deleteNode: (obj:Funcs) => void;
    deleteAll: () => void;
  }
  
  type AuthProviderProps = {
    children: ReactNode;
  }
  
  export const FunctionalitiesContext = createContext({} as FunctionalitiesContextData);
  
  function FunctionalitiesProvider({ children }: AuthProviderProps) {
    const [funcs, setFuncs] = useState<Funcs[]>([]);

    const [selected, setSelected] = useState<Config>({} as Config);

    const [lengthFuncs, setLengthFuncs] = useState(2);
    const [onToggle, setOnToggle] = useState<boolean>(true);

    useEffect(() => {
      setFuncs([
        {
        id: '0',
        name: 'Header',
        type:'header',
        color:'red',
        isRoot: true,
        config: {
          width: "100%",
          height: "100%",
          bgColor: "#f8f8f8",
        },
        children: [],
        },
        {
          id: '1',
          name: 'Main',
          type:'main',
          children: [
            {
              id: '4',
              name: 'testando',
              type:'div',
              color:'red',
              config: {
                width: "50%",
                height: "50%",
                bgColor: "orange",
              },
              children: [],
            },
          ],
          color:'green',
          isRoot: true,
          config:{
            bgColor: '#dfdfdf',
            width:'100%',
            height:'100%',
          },
        },
        {
          id: '3',
          name: 'Tab Nav',
          type:'tab',
          children: [],
          color:'purple',
          isRoot: true,
          config:{
            bgColor: '#c4c4c4',
            width:'100%',
            height:'100%',
          },
        },
    ]);
    },[]);

    function addNode(name:string, type:string, param:string, func:Funcs) {
      if (param === 'solo') {
          setFuncs([...funcs, {
            id: (lengthFuncs+1).toString(),
            name,
            type,
            color: '#'+Math.floor(Math.random()*16777215).toString(16),
            children: [],
            
          }]);
          setLengthFuncs(lengthFuncs+1);
      } else if (func.children !== undefined) {
          func.children.push({
            id: (lengthFuncs+1).toString(),
            name:name,
            type:type,
            color: func.color,
            children: [],
          });
          setLengthFuncs(lengthFuncs+1);
      }
    }

    function editNode (obj:Funcs, name:string) {
      let newObj = {...obj};
      newObj.name = name;

      const target = JSON.stringify(obj);
      const base = JSON.stringify(funcs);

      const result = JSON.parse(base.replace(target, JSON.stringify(newObj)));
      setFuncs(result);
    } 

    function deleteNode (obj:Funcs) {
      const base = JSON.stringify(funcs);

      const targets = {
        one: ','+JSON.stringify(obj),
        two: JSON.stringify(obj)+',',
        three: JSON.stringify(obj),
      }

      try {
        const converted = base.replace(targets.one, '');
        if (converted !== base) {
            setFuncs(JSON.parse(converted)); 
        } else {
          const converted2 = base.replace(targets.two, '');
          if (converted2 !== base) {
              setFuncs(JSON.parse(converted2)); 
          } else {
            const converted3 = base.replace(targets.three, '');
            setFuncs(JSON.parse(converted3)); 
          }
        }
      } catch (error) {}

      setLengthFuncs(lengthFuncs-1);
    } 

    function editNodeConfig (obj:Funcs, oldConfig:Config, config:Config) {
      const newObj = {...obj};

      newObj.config = config;
     
      const target = JSON.stringify(oldConfig);
      const base = JSON.stringify(funcs);

      const result = JSON.parse(base.replace(target, JSON.stringify(config)));

      setFuncs(result);
    } 

    function deleteAll () {
      setFuncs([]);
    }

    return (
      <FunctionalitiesContext.Provider value={{
        funcs, setFuncs,
        selected, setSelected,
        onToggle, setOnToggle,
        lengthFuncs, setLengthFuncs,
        editNodeConfig,
        addNode, deleteAll,
        editNode, deleteNode,
      }}>
        {children}
      </FunctionalitiesContext.Provider>
    )
  }
  
  function useFuncs() {
    const context = useContext(FunctionalitiesContext);
    return context;
  }
  
  export { FunctionalitiesProvider, useFuncs };