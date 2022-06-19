/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { UserProvider } from '@supabase/supabase-auth-helpers/react'
import { request, RequestDocument } from 'graphql-request'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'react-loading-skeleton/dist/skeleton.css'
import 'styles/flashcard.css'
import 'styles/flows.css'
import { SWRConfig } from 'swr'
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
      </Head>
      <ThemeProvider defaultTheme="light" enableSystem>
        <UserProvider supabaseClient={supabaseClient}>
          <Component {...pageProps} />
        </UserProvider>
      </ThemeProvider>
    </SWRConfig>
  )
}

export default MyApp
