import { Popover, Transition } from '@headlessui/react'
import {
  ChatAlt2Icon,
  DocumentAddIcon,
  LightBulbIcon,
  PencilIcon,
  StarIcon,
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
  setCreateFlowAs: (flowType: FlowType | null) => void
  disabled?: boolean
}

export default function FlowDropdown({ setCreateFlowAs, disabled }: Props) {
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
      },
    },
    {
      name: 'Discussion',
      description:
        'Organize questions, quotes, and tips from your classmates and TAs.',
      color: Color.GREEN,
      bgColor: 'rgba( 118, 219, 137, 0.2)',
      icon: ChatAlt2Icon,
      onClick: () => {
        setCreateFlowAs(FlowType.DISCUSSION)
      },
    },
    {
      name: 'Note',
      description: 'Add PDFs, videos, and bookmarks in your flow.',
      color: Color.INDIGO,
      bgColor: 'rgba( 99, 102, 233, 0.2)',
      icon: PencilIcon,
      onClick: () => {
        setCreateFlowAs(FlowType.NOTE)
      },
    },
    {
      name: 'Assignment',
      description:
        'Manage an assigment with inline tasks, notes, and flow sharing.',
      color: Color.YELLOW,
      bgColor: 'rgba( 225, 181, 62, 0.2)',
      icon: DocumentAddIcon,
      onClick: () => {
        setCreateFlowAs(FlowType.ASSIGNMENT)
      },
    },
    {
      name: 'Assessment',
      description: 'Add practice material and graded assessments to your flow.',
      color: Color.ROSE,
      bgColor: 'rgba( 234, 120, 135, 0.2)',
      icon: StarIcon,
      onClick: () => {
        setCreateFlowAs(FlowType.ASSESSMENT)
      },
    },
    {
      name: 'Synthesis',
      description:
        'Revise, summarize, and synthesize your notes to prepare for an exam.',
      color: 'rainbow',
      bgColor: '',
      icon: 'SynthesisIcon',
      onClick: () => {
        setCreateFlowAs(FlowType.SYNTHESIS)
      },
    },
  ]

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  if (disabled) return <PlusButton disabled />

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
              <Popover.Button
                as="div"
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
              </Popover.Button>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
