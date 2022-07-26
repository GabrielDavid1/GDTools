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
    const [lengthFuncs, setLengthFuncs] = useState(6);
    const [onToggle, setOnToggle] = useState<boolean>(true);

    useEffect(() => {
      setFuncs([{
        id: '0',
        name: 'John',
        type:'header',
        color:'red',
        config: {
          type:'Div',
          width: "100%",
          height: "100px",
          bgColor: "orange",
          pxBorder: "1px",
          typeBorder: "3",
          colorBorder: "#rrggbb",
          boxShadow: 10, 
          borderRadius: "0px",
          opacity: "1",
          zIndex: "1",
          flexWrap: "none",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          isScrollX: false,
          isScrollY: true,
        },
        children: [
          {
              id: '1',
              name: 'Doe',
              type:'main',
              color:'red',
              children: [
              {
                id: '3',
                name: 'numero 2',
                type:'View',
                color: 'red',
                children: [{
                  id: '4',
                  name: 'numero 3',
                  type:'View',
                  color:'red',
                  children: [
                    {
                      id: '5',
                      name: 'numero 4',
                      type:'View',
                      color:'red',
                      children: [
                        {
                          id: '6',
                          name: 'numero 5',
                          type:'View',
                          color:'red',
                          children: [],
                        },
                      ],
                    },
                  ],
                },],
              },
            ],
          },
          {
            id: '7',
            name: 'numero 6',
            type:'View',
            children: [],
            color:'pink',
          },
        ],
      }]);
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