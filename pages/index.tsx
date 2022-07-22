import type { NextPage } from "next";
import Head from "next/head";
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

          <main className="content">
            <span className="title-logo">
              <p> GDTools </p>
            </span>

            <div className="app-content">

            </div>

            <span className="code-view">
              <a> 
                <p> View code </p>
              </a>
            </span>
          </main>

        </div> 
      </div>
      <div className="control-settings"></div>
    </div>
  );
};

export default Home;
