import type { NextPage } from 'next'
import Head from 'next/head'
//import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="Container">
      <Head>
        <title>GDTools</title>
        <meta name="description" content="my app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <div className="Content"> 
        <h1>Content</h1>
      </div>
      <div className="Settings"> 
        <h1>Settings</h1>
      </div>
    </div>
  )
}

export default Home
