//React
import React, { useEffect, useRef, useState } from "react";
import { DivView } from "./Elements/Div";

//Styled Components
import { 
  AppBody, 
  AppHeader, 
  AppTab
} from "./styles";

export default function Main() {  
  const [headerDimension, setHeaderDimension] = useState({ width: 0, height: 0 });
  const [bodyDimension, setBodyDimension] = useState({ width: 0, height: 0 });
  const [tabDimension, setTabDimension] = useState({ width: 0, height: 0 });

  const refHeader = useRef<HTMLDivElement>({} as HTMLDivElement);
  const refBody = useRef<HTMLDivElement>({} as HTMLDivElement);
  const refTab = useRef<HTMLDivElement>({} as HTMLDivElement);

  useEffect(() => {
    //BODY DIMENSION
    const resizeableBody = refBody.current;
    const styles = window.getComputedStyle(resizeableBody);
    const widthBody = parseInt(styles.width, 10);
    const heightBody = parseInt(styles.height, 10);
    setBodyDimension({ width: widthBody, height: heightBody });

    //HEADER DIMENSION
    const resizeableHeader = refHeader.current;
    const stylesHeader = window.getComputedStyle(resizeableHeader);
    const widthHeader = parseInt(stylesHeader.width, 10);
    const heightHeader = parseInt(stylesHeader.height, 10);
    setHeaderDimension({  width: widthHeader, height: heightHeader });

    //TAB DIMENSION
    const resizeableTab = refTab.current;
    const stylesTab = window.getComputedStyle(resizeableTab);
    const widthTab = parseInt(stylesTab.width, 10);
    const heightTab = parseInt(stylesTab.height, 10);
    setTabDimension({  width: widthTab, height: heightTab });
  },[]);

  return (
    <main className="content">
      <span className="code-view">
        <a>
          <p> View code </p>
        </a>
      </span>
      <div className="app-content">
        <AppHeader ref={refHeader}> 

        </AppHeader>
        <AppBody ref={refBody}>
          <DivView 
            dimensionNode={bodyDimension}  
          />
        </AppBody>
        <AppTab ref={refTab}>

        </AppTab>
      </div>
    </main>
  );
}
