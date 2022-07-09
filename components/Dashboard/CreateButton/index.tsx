import { Popover, Transition } from '@headlessui/react'
import {
  ChatAlt2Icon,
  LightBulbIcon,
  PencilIcon,
} from '@heroicons/react/outline'
import classNames from 'classnames'
import PlusButton from 'components/buttons/PlusButton'
import MainItem from 'components/Dashboard/CreateButton/MainItem'
import { useTheme } from 'next-themes'
import { Fragment, SVGProps, useEffect, useState } from 'react'
import { Color } from 'types/Colors'
import { FlowType } from 'types/Flow'
import FlowInfo from './FlowInfo'

export interface CreateButtonMenuItem {
  name: string
  description: string
  color: Color | 'text-primary' | 'rainbow'
  bgColor: string
  icon: ((props: SVGProps<SVGSVGElement>) => JSX.Element) | 'SynthesisIcon'
  onClick?: () => void
}

interface Props {
  flowModalOpen: boolean
  setFlowModalOpen: (open: boolean) => void
  setCreateFlowAs: (flowType: FlowType | null) => void
}

export default function FlowDropdown({
  flowModalOpen,
  setFlowModalOpen,
  setCreateFlowAs,
}: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  const items: CreateButtonMenuItem[] = [
    {
      name: 'Lecture',
      description: 'Add audio, video, and professor tips to your flow.',
      color: 'text-primary',
      bgColor: 'rgba( 140, 228, 219, 0.3)',
      icon: LightBulbIcon,
      onClick: () => {
        setCreateFlowAs(FlowType.LECTURE)
        setFlowModalOpen(true)
      },
    },
    {
      name: 'Discussion',
      description:
        'Organize questions, quotes, and tips from your classmates and TAs.',
      color: Color.GREEN,
      bgColor: 'rgba( 118, 219, 137, 0.2)',
      icon: ChatAlt2Icon,
    },
    {
      name: 'Note',
      description: 'Easily embed textbook pages, videos, and more.',
      color: Color.INDIGO,
      bgColor: 'rgba( 99, 102, 233, 0.2)',
      icon: PencilIcon,
    },
    {
      name: 'Synthesis',
      description:
        'Revise, summarize, and synthesize your notes to prepare for an exam.',
      color: 'rainbow',
      bgColor: '',
      icon: 'SynthesisIcon',
    },
  ]

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Popover className="relative mr-2">
      {() => (
        <>
          <PlusButton />
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 z-10 max-w-sm transform w-72">
              <div
                className={classNames(
                  {
                    'bg-white ring-1 ring-black ring-opacity-5':
                      theme === 'light',
                  },
                  { 'bg-slate-700': theme === 'dark' },
                  'overflow-hidden rounded-md shadow-lg my-1',
                )}
              >
                <div className="relative pt-2 px-2 pb-2">
                  {items.map((item) => (
                    <MainItem item={item} key={item.name} />
                  ))}
                </div>
                <FlowInfo />
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
