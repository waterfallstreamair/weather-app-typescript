import '../styles/index.css'

import { Provider } from 'react-redux'

import store from '../store/'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Navbar />
        <main className="flex-1 overflow-y-auto">
          <Component {...pageProps} />
        </main>
        <Footer />
      </Layout>
    </Provider>
  )
}
