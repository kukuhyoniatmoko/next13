import { Global } from '@emotion/react'
import { globalStyles } from '../components/GlobalStyle'
import '../sass/index.scss'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
