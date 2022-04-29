import AuthProvider from 'contexts/AuthContext'
import { request } from 'graphql-request'
import type { AppProps } from 'next/app'
import 'react-loading-skeleton/dist/skeleton.css'
import { SWRConfig } from 'swr'
import '../styles/globals.css'
import '../styles/transition.css'

const colors = {
  brand: {
    900: '#24272E',
    800: '#9ACBCE',
    700: '#2a69ac'
  }
}

const fetcher = query => request('/api/graphql', query)

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <SWRConfig value={{ fetcher: fetcher }}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </SWRConfig>
    </>
  )
}

export default MyApp
