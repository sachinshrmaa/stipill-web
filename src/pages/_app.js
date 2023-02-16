import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
