/* eslint-disable no-shadow */
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import LoginHeader from 'components/Auth/Login/LoginHeader'
import LoginImage from 'components/Auth/Login/LoginImage'
import ProviderButtonGroup from 'components/Auth/Login/ProviderButtonGroup'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useHotkeys } from 'react-hotkeys-hook'

export default function Login() {
  const router = useRouter()
  const { user } = useUser()
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)
  const [succeed, setSucceed] = useState(false)

  useEffect(() => {
    setMounted(true)
    ;(async () => {
      if (user) router.push('/dash')
    })()
  }, [user])

  useHotkeys(
    'cmd+l, ctrl+l',
    (e) => {
      e.preventDefault()
      // eslint-disable-next-line no-unused-expressions
      theme === 'light' ? setTheme('dark') : setTheme('light')
    },
    {
      enableOnTags: ['INPUT', 'TEXTAREA', 'SELECT'],
    },
    [theme],
  )

  if (!mounted) return null

  return (
    <>
      <Head>
        <title>Login | Studyflow</title>
        <meta property="og:title" content="Login | Studyflow" key="title" />
      </Head>
      <div
        className={classNames(
          { 'bg-white': theme === 'light' },
          { 'bg-base-100': theme === 'dark' },
          'min-h-full h-screen flex',
        )}
      >
        <Toaster position="top-center" reverseOrder={false} />
        <LoginImage />
        <div className="flex-1 flex flex-col justify-center py-12 sm:px-6 xl:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96 pb-36 xl:pb-18">
            <div className="w-5/6 sm:w-full mx-auto">
              <LoginHeader />
              <div className="mt-12 w-full">
                <ProviderButtonGroup />
                {/* <OrLine succeed={succeed} /> */}
              </div>
              <p className="text-info text-center mt-8">
                By continuing, you agree with our{' '}
                <a
                  href="https://docs.studyflow.ai/docs/getting-started/terms-of-service"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary"
                >
                  terms of service
                </a>{' '}
                and{' '}
                <a
                  href="https://docs.studyflow.ai/docs/getting-started/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary"
                >
                  privacy policy
                </a>
                .
              </p>
              {/* <EmailLogin succeed={succeed} setSucceed={setSucceed} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
