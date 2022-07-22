import React, {
    createContext,
    useState,
    useContext,
    ReactNode
  } from "react";

  type FunctionalitiesContextData = {
    funcs: boolean;
    setFuncs: (param: boolean) => void;
  }
  
  type AuthProviderProps = {
    children: ReactNode;
  }
  
  export const FunctionalitiesContext = createContext({} as FunctionalitiesContextData);
  
  function AuthProvider({ children }: AuthProviderProps) {
    const [funcs, setFuncs] = useState(false);

    return (
      <FunctionalitiesContext.Provider value={{
        funcs, setFuncs
      }}>
        {children}
      </FunctionalitiesContext.Provider>
    )
  }
  
  function useFuncs() {
    const context = useContext(FunctionalitiesContext);
  
    return context;
  }
  
  export { AuthProvider, useFuncs };