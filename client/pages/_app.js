import Footer from '@/comp/Footer'
import NavBar from '@/comp/NavBar'
import { SessionProvider } from "next-auth/react"
import '@/styles/globals.css'
import '@/styles/loader.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  )
}
