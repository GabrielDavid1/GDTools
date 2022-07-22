//Next
import type { NextPage } from "next";

//Components
import Main from "../components/Main";
import Side from "../components/Side";
import Settings from "../components/Settings";
import HeaderPage from "../components/HeaderPage";

const Home: NextPage = () => {
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
        <Settings />
      </div>
    </div>
  );
};

export default Home;
