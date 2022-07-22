//Styles
import '../styles/globals.scss'

//Providers
import type { AppProps } from 'next/app'
import { FunctionalitiesProvider } from '../contexts/Functionalities'

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <FunctionalitiesProvider>
     <Component {...pageProps} />
    </FunctionalitiesProvider>
  )
}

export default MyApp
