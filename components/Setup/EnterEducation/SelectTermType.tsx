import { Listbox } from '@headlessui/react'
import { SelectorIcon } from '@heroicons/react/outline'
import { TermType } from '@prisma/client'
import classnames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

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
      <label>Term Type</label>
      <Listbox value={termTypeNative} onChange={setTermTypeNative}>
        <Listbox.Button
          className={classnames(
            { 'bg-base-100': theme === 'dark' },
            'w-3/4 mx-auto cursor-pointer relative rounded-lg py-1 pl-10 pr-10 text-center shadow-md focus:outline-none text-md',
          )}
        >
          {termTypeNative}
          <span className="pointer-events-none absolute right-2 top-1.5 flex items-center pr-2">
            <SelectorIcon className="h-5 w-5 " aria-hidden="true" />
          </span>
        </Listbox.Button>
        <div className="relative w-1/2 mx-auto">
          <Listbox.Options className="absolute z-10 mt-2 rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {(Object.keys(TermType) as Array<keyof typeof TermType>).map(
              (type) => (
                <Listbox.Option
                  key={type}
                  value={type}
                  className={({ active }) =>
                    classnames(
                      { 'bg-primary text-white': active },
                      'cursor-pointer select-none py-2 pl-10 pr-10',
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
