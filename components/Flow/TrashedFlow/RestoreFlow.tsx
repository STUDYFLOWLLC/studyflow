import { Menu, Transition } from '@headlessui/react'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import useDashFlows from 'hooks/flows/useDashFlows'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { ActiveProps } from 'types/ActiveProps'
import { restoreFlow } from 'utils/flows/propertyHandlers'

interface Props {
  flowId: string
  closeModal: () => void
}

export default function TrashedFlowOptions({ flowId, closeModal }: Props) {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { coursesOnTerm, coursesOnTermLoading } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0]?.TermID,
  )
  const { dashFlows, dashFlowsLoading, mutateDashFlows } = useDashFlows(
    userDetails?.UserID,
  )

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Menu as="div" className="relative inline-block text-left">
      {!coursesOnTermLoading ? (
        <Menu.Button
          disabled={coursesOnTermLoading || dashFlowsLoading}
          className="mr-8 inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm"
        >
          <span className="truncate mr-2">Restore flow</span>
        </Menu.Button>
      ) : (
        <Skeleton className="h-5 w-40 ml-4" />
      )}

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
            'absolute z-20 left-0 w-48 origin-top-left rounded-md shadow-lg focus:outline-none',
          )}
        >
          {coursesOnTerm.map((courseOnTerm) => (
            <Menu.Item key={courseOnTerm.CourseOnTermID}>
              {({ active }: ActiveProps) => (
                <div
                  className={classNames(
                    {
                      'bg-gray-100 text-gray-900': active && theme === 'light',
                    },
                    { 'text-gray-700': !active && theme === 'light' },
                    {
                      'bg-slate-600': active && theme === 'dark',
                    },
                    {
                      'bg-slate-700 ': !active && theme === 'dark',
                    },
                    'px-1 flex items-center cursor-pointer first-of-type:rounded-t-md last-of-type:rounded-b-md',
                  )}
                  onClick={() =>
                    restoreFlow(
                      flowId,
                      userDetails,
                      courseOnTerm,
                      dashFlows,
                      mutateDashFlows,
                      closeModal,
                    )
                  }
                  onKeyDown={() =>
                    restoreFlow(
                      flowId,
                      userDetails,
                      courseOnTerm,
                      dashFlows,
                      mutateDashFlows,
                      closeModal,
                    )
                  }
                >
                  <div
                    className={classNames(
                      courseOnTerm.Color,
                      ' ring-offset-1 w-3 h-3 mx-2 rounded-full',
                    )}
                  />
                  <span className="block py-2 text-sm truncate">
                    {courseOnTerm.Nickname || courseOnTerm.FK_Course?.Code}
                  </span>
                </div>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
