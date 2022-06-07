/* eslint-disable no-shadow */
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import LoginHeader from 'components/Auth/Login/LoginHeader'
import LoginImage from 'components/Auth/Login/LoginImage'
import OrLine from 'components/Auth/Login/OrLine'
import ProviderButtonGroup from 'components/Auth/Login/ProviderButtonGroup'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useHotkeys } from 'react-hotkeys-hook'
import EmailLogin from './Login/EmailLogin'

export default function Login() {
  const router = useRouter()
  const { user } = useUser()
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [succeed, setSucceed] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    setMounted(true)
    ;(async () => {
      if (user) router.push('/dash')
      // eslint-disable-next-line no-promise-executor-return
      await new Promise((r) => setTimeout(r, 500))
      setLoading(false)
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
    <div
      className={classNames(
        { 'bg-white': theme === 'light' },
        { 'bg-base-100': theme === 'dark' },
        'min-h-full flex',
      )}
    >
      <Toaster position="top-center" reverseOrder={false} />
      <LoginImage />
      <div className="flex-1 flex flex-col justify-center py-12 sm:px-6 xl:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96 pb-36 xl:pb-0">
          <LoginHeader />
          <div className="mt-4 w-full">
            <ProviderButtonGroup />
            <OrLine succeed={succeed} />
          </div>
          <EmailLogin
            email={email}
            setEmail={setEmail}
            succeed={succeed}
            setSucceed={setSucceed}
            loading={loading}
            setLoading={setLoading}
          />
        </div>
      </div>
    </div>
  )
}
