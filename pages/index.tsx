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

  const { funcs } = useFuncs();
  const { onToggle, setOnToggle } = useFuncs();
  return (
    <div className="Container">
      <HeaderPage />
      <div className="functionalities-block">
        <div className="control-block">
          <Side />
          <Main config={(funcs[0] !== undefined) ? funcs[0].config : {}} />
        </div> 
      </div>
      <div className="control-settings">
        <div className="content">
          <Header 
            isActive={onToggle} 
            setIsActive={setOnToggle}
          />
          {onToggle ? (
            <>
              <BottomTab />
              <Tree />
            </>
          ) : (
              <ModelSetting config={(funcs[0] !== undefined) ? funcs[0].config : {}}  />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
