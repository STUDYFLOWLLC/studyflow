import classNames from 'classnames'
import MainSpinner from 'components/spinners/MainSpinner'
import { useTheme } from 'next-themes'
import { Dispatch, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { SpinnerSizes } from 'types/Loading'
import isValidEmail from 'utils/isValidEmail'
import { supabase } from 'utils/supabase'

interface Props {
  succeed: boolean
  setSucceed: Dispatch<React.SetStateAction<boolean>>
}

export default function EmailLogin({ succeed, setSucceed }: Props) {
  const { theme } = useTheme()

  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const handleLogin = async (email: string) => {
    try {
      setLoading(true)
      if (!isValidEmail(email)) {
        toast.error('Please enter a valid email address')
        return
      }
      const { error } = await supabase.auth.signIn({ email })
      if (error) throw error
      toast.success('Check your email for a login link')
      setSucceed(true)
    } catch (error) {
      toast.error('Login failed. Please try another method. ')
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="mt-4 w-full">
      {!succeed ? (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleLogin(email)
          }}
          method="POST"
          className="space-y-6"
        >
          <div className="w-full">
            <div className="w-full">
              {loading ? (
                <div className="w-12 mx-auto">
                  <MainSpinner size={SpinnerSizes.medium} />
                </div>
              ) : (
                <input
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="your e-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  className={classNames(
                    { 'bg-white': theme === 'light' },
                    {
                      'bg-base-100 placeholder-gray-400': theme === 'dark',
                    },
                    'appearance-none block w-full px-3 py-2 rounded-md  focus:outline-none font-semibold text-lg text-center',
                  )}
                />
              )}
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="mx-auto h-12 w-4/5 btn btn-primary"
            >
              <span className="w-full text-center text-base">Continue</span>
            </button>
          </div>
        </form>
      ) : (
        <div className="mt-12">
          <p className="text-base">
            Great! Please check{' '}
            <span className="text-primary-500">{email}</span> for a login link.
          </p>
          <p className="mt-4">
            Entered the wrong email?{' '}
            <span
              onClick={() => {
                setSucceed(false)
                setEmail('')
              }}
              onKeyDown={() => {
                setSucceed(false)
                setEmail('')
              }}
              className="cursor-pointer text-primary-500 underline decoration-secondary-600"
            >
              Go back.
            </span>{' '}
          </p>
        </div>
      )}
    </div>
  )
}
