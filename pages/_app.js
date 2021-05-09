import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import '../styles/base.scss'
import Header from '../components/header/header.component'
import Footer from '../components/footer/footer.component'
import React from 'react'
function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>

  )
}

export default MyApp
