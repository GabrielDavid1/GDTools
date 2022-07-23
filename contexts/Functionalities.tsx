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

    lengthFuncs:number;
    setLengthFuncs: React.Dispatch<React.SetStateAction<number>>;

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
    const [lengthFuncs, setLengthFuncs] = useState(3);

    useEffect(() => {
      setFuncs([{
        id: '0',
        name: 'John',
        type:'header',
        color:'red',
        children: [
          {
              id: '1',
              name: 'Doe',
              type:'main',
              color:'red',
              children: [
              {
                id: '2',
                name: 'numero 1',
                type:'View',
                children: [],
                color:'red',
              },
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

    function deleteAll () {
      setFuncs([]);
    }

    return (
      <FunctionalitiesContext.Provider value={{
        funcs, setFuncs,
        lengthFuncs, setLengthFuncs,
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