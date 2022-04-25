import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'

const colors = {
  brand: {
    900: '#24272E',
    800: '#9ACBCE',
    700: '#2a69ac'
  }
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp
