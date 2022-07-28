//Next
import type { NextPage } from "next";

//Components
import Main from "../components/Main";
import Side from "../components/Side";
import Header from "../components/Settings/Header";
import HeaderPage from "../components/HeaderPage";
import { useFuncs } from "../contexts/Functionalities";
import BottomTab from "../components/Settings/BottomTab";
import Tree from "../components/Settings/Tree";
import ModelSetting from "../components/Settings/ModelSetting";

const Home: NextPage = () => {
  const { onToggle } = useFuncs();
  
  return (
    <div className="Container">
      <HeaderPage />
      <div className="functionalities-block">
        <div className="control-block">
          <Side />
          <Main />
        </div> 
      </div>
      <div className="control-settings">
        <div className="content">
          <Header />
          {onToggle ? (
            <>
              <BottomTab />
              <Tree />
            </>
          ) : (
              <ModelSetting />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
