import { Listbox } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { TermType } from 'types/School'

interface Props {
  termTypeNative: TermType
  setTermTypeNative: (termTypeNative: TermType) => void
}

export default function SelectTermType({
  termTypeNative,
  setTermTypeNative,
}: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <>
      <p className="mt-1 mb-2">
        Studyflow automatically names and organizes each term so you can easily
        look back at your past work.
      </p>
      <Listbox value={termTypeNative} onChange={setTermTypeNative}>
        <Listbox.Button
          className={classNames(
            { 'bg-white': theme === 'light' },
            { 'bg-base-100': theme === 'dark' },
            'w-3/4 mx-auto cursor-pointer relative rounded-lg py-1 pl-10 pr-10 text-center shadow-md focus:outline-none text-md',
          )}
        >
          {termTypeNative}
          <span className="pointer-events-none absolute right-2 top-1.5 flex items-center pr-2">
            <ChevronUpDownIcon className="h-5 w-5 " aria-hidden="true" />
          </span>
        </Listbox.Button>
        <div className="relative w-1/2 mx-auto">
          <Listbox.Options
            className={classNames(
              {
                'bg-white ring-1 ring-black ring-opacity-5': theme === 'light',
              },
              {
                'ring-1 ring-slate-400 ring-opacity-50': theme === 'dark',
              },
              'absolute z-10 mt-2 rounded-md shadow-lg  focus:outline-none sm:text-sm',
            )}
          >
            {(Object.keys(TermType) as Array<keyof typeof TermType>).map(
              (type) => (
                <Listbox.Option
                  key={type}
                  value={type}
                  className={({ active }) =>
                    classNames(
                      { 'bg-white': theme === 'light' },
                      {
                        'bg-slate-700': theme === 'dark',
                      },
                      { 'bg-primary text-white': active && theme === 'light' },
                      { 'bg-slate-600': active && theme === 'dark' },
                      'first-of-type:rounded-t-md last-of-type:rounded-b-md cursor-pointer select-none py-2 pl-10 pr-10 text-md',
                    )
                  }
                >
                  {type}
                </Listbox.Option>
              ),
            )}
          </Listbox.Options>
        </div>
      </Listbox>
    </>
  )
}
