import logo from 'images/wave.svg'
import Image from 'next/image'
import { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { supabase } from '../../utils/supabase'
import AppleButton from './AppleButton'
import GoogleButton from './GoogleButton'

export default function Login() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('hello')
  const [succeed, setSucceed] = useState(true)

  const isValidEmail = (email: string): boolean => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true
    }
    return false
  }

  const handleLogin = async (email: string) => {
    try {
      setLoading(true)
      console.log(email)
      if (!isValidEmail(email)) {
        toast.error('Please enter a valid email address')
        return
      }
      const { error } = await supabase.auth.signIn({ email })
      if (error) throw error
      toast.success('Check your email for a login link')
      setSucceed(true)
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="min-h-full flex">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <Image width={48} height={48} src={logo} alt="Workflow" />
              <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
              {/* <p className="mt-2 text-sm text-gray-600">
                Or{' '}
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  start your 14-day free trial
                </a>
              </p> */}
            </div>

            <div className="mt-4 w-full">
              <div>
                <div>
                  {/* <p className="text-sm font-medium text-gray-700">
                    Sign in with
                  </p> */}

                  <div className="w-full mt-1 flex flex-col items-center">
                    <div>
                      <AppleButton />
                      <GoogleButton />
                    </div>
                  </div>
                </div>

                <div className="mt-6 relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  {!succeed ? (
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">
                        Or continue with
                      </span>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="mt-6">
                {!succeed ? (
                  <form
                    onSubmit={e => {
                      e.preventDefault()
                      handleLogin(email)
                    }}
                    method="POST"
                    className="space-y-6"
                  >
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          autoComplete="email"
                          placeholder="hello@studyflow.ai"
                          onChange={e => setEmail(e.target.value)}
                          disabled={loading}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-400 focus:border-primary-400 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-400 hover:bg-primary-5
                      00 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600"
                      >
                        Sign in
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
    </>
  )
}
