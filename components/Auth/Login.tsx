/* eslint-disable no-shadow */
import { useUser } from '@supabase/supabase-auth-helpers/react'
import AppleButton from 'components/buttons/AppleButton'
import GoogleButton from 'components/buttons/GoogleButton'
import SpinnerPage from 'components/spinners/SpinnerPage'
import logo from 'images/wave.svg'
import wavesbg from 'images/wavesbg.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { supabase } from 'utils/supabase'

export default function Login() {
  const router = useRouter()
  const { user } = useUser()
  const [loading, setLoading] = useState(true)
  const [succeed, setSucceed] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    ;(async () => {
      if (user) router.push('/dash')
      // eslint-disable-next-line no-promise-executor-return
      await new Promise((r) => setTimeout(r, 500))
      setLoading(false)
    })()
  }, [user])

  const isValidEmail = (email: string): boolean => {
    // eslint-disable-next-line no-useless-escape
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true
    }
    return false
  }

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

  if (loading) return <SpinnerPage />

  return (
    <div className="min-h-full flex">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="hidden lg:block relative w-0 flex-1">
        <div className="absolute inset-0 h-full w-full object-cover overflow-hidden">
          <Image src={wavesbg} alt="" />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <Image width={48} height={48} src={logo} alt="Workflow" />
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
              Welcome to Studyflow
            </h2>
          </div>

          <div className="mt-4 w-full">
            <div>
              <div>
                <div className="mt-1 flex flex-col items-center">
                  <AppleButton />
                  <GoogleButton />
                </div>
              </div>

              <div className="mt-6 relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                {!succeed && (
                  <div className="relative flex justify-center">
                    <span className="bg-white text-gray-500 px-4 text-base">
                      Or
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4">
              {!succeed ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleLogin(email)
                  }}
                  method="POST"
                  className="space-y-6"
                >
                  <div>
                    <div>
                      <input
                        id="email"
                        name="email"
                        autoComplete="email"
                        placeholder="your e-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={loading}
                        className="appearance-none block w-full px-3 py-2 rounded-md placeholder-gray-400 focus:outline-none font-semibold text-lg text-center"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="h-12 w-full flex justify-center py-2 px-4 rounded-md text-sm font-medium text-white bg-primary-400 hover:bg-primary-500 items-center"
                    >
                      <span className="w-full text-center text-base">
                        Continue
                      </span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="mt-12">
                  <p className="text-base">
                    Great! Please check{' '}
                    <span className="text-primary-500">{email}</span> for a
                    login link.
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
          </div>
        </div>
      </div>
    </div>
  )
}
