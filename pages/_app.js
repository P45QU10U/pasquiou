import Skeleton from '../components/skeleton'
import '../styles/global.css'

const App = function ({ Component, pageProps }) {
  return <Skeleton> 
  <Component {...pageProps} />
  </Skeleton>
}

export default App
