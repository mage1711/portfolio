import { AppProps } from 'next/app'
import NavBar from "../components/NavBar"
import '../styles/global.css'

function App({ Component, pageProps }: AppProps) {
  return(
    <div>
    {/* <NavBar/> */}
    <Component {...pageProps} />
    </div>
  )
}

export default App