import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function FourOFour() {
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className=" min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="max-w-max mx-auto">
        <main className="sm:flex">
          <p className="text-4xl font-extrabold sm:text-5xl text-primary">
            404
          </p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-extrabold text-base-content tracking-tight sm:text-5xl">
                Page not found
              </h1>
              <p className="mt-1">
                Please check the URL in the address bar and try again.
              </p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <a
                href="#"
                className="btn btn-primary"
                onClick={() => setTheme('dark')}
              >
                Dark
              </a>
              <a
                href="#"
                className="btn btn-secondary"
                onClick={() => setTheme('light')}
              >
                Secondary
              </a>
              <a
                href="#"
                className="btn btn-accent"
                onClick={() => setTheme('light')}
              >
                Accent
              </a>
              {/* <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Contact support
              </a> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
