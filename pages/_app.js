import '../styles/globals.css'
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps, router }) {
  return (
    <Navbar router={router}>
      <Component {...pageProps} key={router.route} />
    </Navbar>
  )
}

export default MyApp
