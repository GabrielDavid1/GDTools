import type { NextPage } from "next";
import Head from "next/head";
//import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="Container">
      <Head>
        <title>GDTools</title>
        <meta name="description" content="my app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="functionalities-block">
        <header className="details">
          <span className="title-logo">
            <h2> GDTools </h2>
          </span>
          <span className="code-view">
            <a>
              <p> View code </p>
            </a>
          </span>
          <p> </p>
        </header>
        <div className="control-block">
          <section className="side-area"></section> 
          <main className="content"> </main>
        </div> 
      </div>
      <div className="control-settings"></div>
    </div>
  );
};

export default Home;
