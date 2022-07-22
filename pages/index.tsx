import type { NextPage } from "next";
import Head from "next/head";
import Main from "../components/Main";
import Settings from "../components/Settings";
//import Image from 'next/image;'
import Side from "../components/Side";

const Home: NextPage = () => {
  return (
    <div className="Container">
      <Head>
        <title>GDTools</title>
        <meta name="description" content="my app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@500&display=swap" rel="stylesheet" />
      </Head>

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
