//Styles
import '../styles/globals.scss'

//Providers
import type { AppProps } from 'next/app'
import { FunctionalitiesProvider } from '../contexts/Functionalities'
import { CodesProvider } from '../contexts/Codes'

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <CodesProvider>
     <FunctionalitiesProvider>
      <Component {...pageProps} />
     </FunctionalitiesProvider>
    </CodesProvider>
  )
}

export default MyApp
