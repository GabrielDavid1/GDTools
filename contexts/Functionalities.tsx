  //React
  import React, {
    createContext,
    useState,
    useContext,
    ReactNode,
    useEffect
  } from "react";
  
  //Types
  import { Funcs } from "../types/Funcs";

  type FunctionalitiesContextData = {
    funcs: Funcs[];
    setFuncs: (param: Funcs[]) => void;
    deleteNode: (obj:Funcs) => void;
    deleteAll: () => void;
  }
  
  type AuthProviderProps = {
    children: ReactNode;
  }
  
  export const FunctionalitiesContext = createContext({} as FunctionalitiesContextData);
  
  function FunctionalitiesProvider({ children }: AuthProviderProps) {
    const [funcs, setFuncs] = useState<Funcs[]>([]);
    
    useEffect(() => {
      setFuncs([{
        id: '0',
        name: 'John',
        type:'header',
        children: [
            {
                id: '1',
                name: 'Doe',
                type:'main',
                children: [
                    {
                        id: '2',
                        name: 'Bluezão',
                        type:'View',
                        children: [],
                        index: 2,
                        path: [0,1],
                    },
                ],
                index: 1,
                path: [0],
            },
        ],
        index: 0,
        path: [0],
      }]);
    },[])

    function addNode(type:string) {
      funcs.push({
        id: funcs.length.toString(),
        name: '',
        type:'main',
        children: [],
        index: funcs.length,
        path: [funcs.length],
      })
    }

    function deleteNode (obj:Funcs) {
      const target = JSON.stringify(obj);
      const base = JSON.stringify(funcs);
      const result = JSON.parse(base.replace(target, ''));
      setFuncs(result);
    } 

    function deleteAll () {
      setFuncs([]);
    }

    return (
      <FunctionalitiesContext.Provider value={{
        funcs, setFuncs,
        deleteNode,
        deleteAll,
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