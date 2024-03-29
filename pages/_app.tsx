/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoogleOAuthProvider } from '@react-oauth/google'
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { UserProvider } from '@supabase/supabase-auth-helpers/react'
import { request, RequestDocument } from 'graphql-request'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import 'react-loading-skeleton/dist/skeleton.css'
import 'styles/flashcard.css'
import 'styles/flows.css'
import { SWRConfig } from 'swr'
import 'tippy.js/dist/tippy.css'
import '../styles/globals.css'
import '../styles/transition.css'

const fetcher = (query: RequestDocument, variables?: any) =>
  request('/api/graphql', query, variables)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <title>Studyflow</title>
        <link rel="icon" href="/logo.svg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Studyflow" key="title" />
      </Head>
      <GoogleOAuthProvider
        clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ''}
      >
        <ThemeProvider defaultTheme="light" enableSystem>
          <UserProvider supabaseClient={supabaseClient}>
            <NextNProgress
              color="#7AE0D6"
              options={{
                trickle: true,
                showSpinner: false,
                trickleSpeed: 200,
              }}
            />
            <Component {...pageProps} />
          </UserProvider>
        </ThemeProvider>
      </GoogleOAuthProvider>
    </SWRConfig>
  )
}

export default MyApp
