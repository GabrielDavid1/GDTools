//React
import React, { useEffect, useRef, useState } from "react";

//Styled Components
import { 
  AppBody, 
  AppHeader, 
  AppTab
} from "./styles";

//Components
import { DivView } from "./Elements/Div";
import { TextView } from "./Elements/Text";
import { ImageView } from "./Elements/Image";

export default function Main() {  
  const [headerDimension, setHeaderDimension] = useState({ width: '0', height: '0' });
  const [bodyDimension, setBodyDimension] = useState({ width: '0', height: '0' });
  const [tabDimension, setTabDimension] = useState({ width: '0', height: '0' });

  const refHeader = useRef<HTMLDivElement>({} as HTMLDivElement);
  const refBody = useRef<HTMLDivElement>({} as HTMLDivElement);
  const refTab = useRef<HTMLDivElement>({} as HTMLDivElement);

  useEffect(() => {
    //BODY DIMENSION
    const DimensionBody = refBody.current;
    const styles = window.getComputedStyle(DimensionBody);
    const widthBody = styles.width;
    const heightBody = styles.height;
    setBodyDimension({ width: widthBody, height: heightBody });

    //HEADER DIMENSION
    const DimensionHeader = refHeader.current;
    const stylesHeader = window.getComputedStyle(DimensionHeader);
    setHeaderDimension({  width: stylesHeader.width, height: stylesHeader.height });

    //TAB DIMENSION
    const DimensionTab = refTab.current;
    const stylesTab = window.getComputedStyle(DimensionTab);
    const widthTab = stylesTab.width;
    const heightTab = stylesTab.height;
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
          <ImageView dimensionNode={bodyDimension} />
        </AppBody>
        
        <AppTab ref={refTab}>

        </AppTab>
      </div>
    </main>
  );
}
