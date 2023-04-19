import Footer from '@/comp/Footer'
import NavBar from '@/comp/NavBar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
