import { Dialog, Transition } from '@headlessui/react'
import classNames from 'classnames'
import CourseNavs from 'components/Dashbar/CourseNavs'
import LogoHeader from 'components/Dashbar/LogoHeader'
import MainNavs from 'components/Dashbar/MainNavs'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import CloseButton from './CloseButton'

interface Props {
  searchValue: string
  setSearchValue: (value: string) => void
  sidebarOpen: boolean
  setSidebarOpen: (value: boolean) => void
}

export default function index({
  searchValue,
  setSearchValue,
  sidebarOpen,
  setSidebarOpen,
}: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 flex z-40 lg:hidden"
        onClose={setSidebarOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div
            className={classNames(
              { 'bg-white': theme === 'light' },
              { 'bg-base-200': theme === 'dark' },
              'relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4',
            )}
          >
            <CloseButton setSidebarOpen={setSidebarOpen} />
            <LogoHeader />
            <div className="mt-5 flex-1 h-0 overflow-y-auto">
              <nav className="px-2">
                <MainNavs />
                <CourseNavs />
              </nav>
            </div>
          </div>
        </Transition.Child>
        <div className="flex-shrink-0 w-14" aria-hidden="true">
          {/* Dummy element to force sidebar to shrink to fit close icon */}
        </div>
      </Dialog>
    </Transition.Root>
  )
}
