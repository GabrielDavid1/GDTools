//React
import React, {
    createContext,
    useState,
    useContext,
    ReactNode,
  } from "react";
  import getFuncTypes from "../Code/getFuncTypes";
  
  //Types
  import { Funcs } from "../types/Funcs";
  
  type CodesContextData = {
    codeMain: string;
    setCodeMain: (param: string) => void;
  
    addInCode: (element:Funcs, selected:Funcs) => void;
    deleteAll: () => void;
  };
  
  type CodesProviderProps = {
    children: ReactNode;
  };
  
  export const CodesContext = createContext(
    {} as CodesContextData
  );
  
  function CodesProvider({ children }: CodesProviderProps) {
    const [codeMain, setCodeMain] = useState<string>('');
  
    function addInCode (element:Funcs, selected:Funcs) {
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
    
    function deleteAll() { 
        setCodeMain('');
    }
  
    return (
      <CodesContext.Provider
        value={{
          addInCode,
          deleteAll,
          codeMain,
          setCodeMain,
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
  