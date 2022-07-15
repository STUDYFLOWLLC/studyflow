import { Menu, Transition } from '@headlessui/react'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import { mutateTermType } from 'hooks/school/mutateTerm'
import useUserDetails, { SmallTerm } from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import { ActiveProps } from 'types/ActiveProps'
import { TermType } from 'types/School'

interface Props {
  term: SmallTerm | undefined
}

export default function TermTypeChooser({ term }: Props) {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails, mutateUserDetails } = useUserDetails(user?.id)

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true))

  if (!mounted) return null

  const changeTerm = (newType: TermType) => {
    // mutate in backend
    mutateTermType(term?.TermID || 0, newType)

    // change locally
    mutateUserDetails(
      {
        ...userDetails,
        FK_Terms: userDetails?.FK_Terms?.map((termCurrent) => {
          if (term?.TermID === termCurrent.TermID) {
            return {
              ...term,
              TermType: newType,
            }
          }
          return termCurrent
        }),
        mutate: true,
      },
      {
        revalidate: false,
      },
    )
  }

  return (
    <Menu as="div" className="relative">
      <Menu.Button
        className={classNames(
          {
            ' hover:bg-gray-50 hover:border-gray-300': theme === 'light',
          },
          {
            ' hover:bg-slate-600 hover:border-slate-400': theme === 'dark',
          },
          'absolute flex items-center font-light m-0 px-2 hover:shadow-sm  border border-transparent  rounded-md cursor-pointer',
        )}
      >
        <div>{term?.TermType || 'Please refresh page'}</div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={classNames(
            { ' bg-white ring-black ring-1 ring-opacity-5': theme === 'light' },
            { 'bg-slate-700': theme === 'dark' },
            'absolute w-24 -bottom-8 left-0 rounded-md shadow-lg focus:outline-none',
          )}
        >
          {Object.keys(TermType).map((termtype) => (
            <Menu.Item key={termtype}>
              {({ active }: ActiveProps) => (
                <div
                  className={classNames(
                    { 'bg-gray-100': active && theme === 'light' },
                    { 'bg-slate-600': active && theme === 'dark' },
                    'z-40 pl-2 w-full pr-4 py-2 text-sm first-of-type:rounded-t-md last-of-type:rounded-b-md flex items-center cursor-pointer',
                  )}
                  onClick={() => changeTerm(termtype as TermType)}
                  onKeyDown={() => changeTerm(termtype as TermType)}
                >
                  {termtype}
                </div>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
