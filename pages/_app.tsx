/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { UserProvider } from '@supabase/supabase-auth-helpers/react'
import { request } from 'graphql-request'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'react-loading-skeleton/dist/skeleton.css'
import 'styles/flashcard.css'
import { SWRConfig } from 'swr'
import '../styles/globals.css'
import '../styles/transition.css'

const fetcher = (query: any) => request('/api/graphql', query)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <title>Studyflow</title>
      </Head>
      <ThemeProvider defaultTheme="system" enableSystem>
        <SWRConfig value={{ fetcher }}>
          <UserProvider supabaseClient={supabaseClient}>
            <Component {...pageProps} />
          </UserProvider>
        </SWRConfig>
      </ThemeProvider>
    </>
  )
}

export default MyApp
