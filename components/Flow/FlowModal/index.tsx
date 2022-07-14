import { Dialog, Transition } from '@headlessui/react'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import Flow from 'components/Flow'
import LoadWithText from 'components/spinners/LoadWithText'
import makeFlow from 'hooks/flows/makeFlow'
import { mutateDeleteFlow } from 'hooks/flows/mutateFlow'
import useDashFlows from 'hooks/flows/useDashFlows'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import { FlowType, FlowVisibility } from 'types/Flow'
import { SpinnerSizes } from 'types/Loading'
import { v4 as uuid } from 'uuid'

interface Props {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  firstCourse?: CourseOnTerm
  flowId?: string
  setCurrentFlow?: (flowId: string) => void
  createAs?: FlowType | null // only pass this if you want to create a new flow on mount
  setCreateAs?: (value: FlowType | null) => void
}

export default function index({
  isOpen,
  setIsOpen,
  firstCourse,
  flowId,
  setCurrentFlow,
  createAs,
  setCreateAs,
}: Props) {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { dashFlows, dashFlowsLoading, mutateDashFlows } = useDashFlows(
    userDetails?.UserID,
  )

  const [mounted, setMounted] = useState(false)
  const [creatingFlow, setCreatingFlow] = useState(false)
  const [createdFlowId, setCreatedFlowId] = useState<string>('')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const createFlow = async () => {
    if (!createAs) return
    setCreatingFlow(true)

    const id = uuid()

    while (dashFlowsLoading) {
      // eslint-disable-next-line no-await-in-loop, no-promise-executor-return
      await new Promise((resolve) => setTimeout(resolve, 100))
    }
    // add flow locally
    mutateDashFlows(
      {
        mutatedFlows: [
          ...dashFlows,
          {
            FlowID: id,
            Type: createAs || FlowType.LECTURE,
            CreatedTime: new Date().toISOString(),
            UserEnteredDate: new Date().toISOString(),
            Visibility: FlowVisibility.PRIVATE,
            FK_CourseOnTerm: {
              Nickname: firstCourse?.Nickname,
              Color: firstCourse?.Color,
              FK_Course: {
                Code: firstCourse?.FK_Course.Code,
              },
            },
          },
        ],
      },
      {
        revalidate: false,
      },
    )

    const data = await makeFlow(
      id,
      createAs || FlowType.LECTURE,
      firstCourse?.CourseOnTermID || 0,
    )

    if (data) {
      setCreatedFlowId(id)
      setCreatingFlow(false)
    }
  }

  const deleteFlow = async () => {
    if (!flowId) return

    setIsOpen(false)

    // mutate in backend
    mutateDeleteFlow(flowId)

    // mutate locally
    mutateDashFlows(
      {
        mutatedFlows: dashFlows.filter((flow) => flow.FlowID !== flowId),
        mutate: true,
      },
      { revalidate: false },
    )
  }

  useEffect(() => {
    setMounted(true)
    createFlow()
  }, [isOpen])

  if (!mounted) return null

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        open={isOpen}
        onClose={() => {
          if (setCurrentFlow) setCurrentFlow('')
          if (setCreateAs) setCreateAs(null)
          if (createdFlowId) setCreatedFlowId('')
          setIsOpen(false)
        }}
        className="relative z-50 w-full h-screen max-h-screen"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </Transition.Child>

        {/* Full-screen scrollable container */}
        <div className="w-full fixed inset-0 h-4/5 my-auto flex items-center justify-center">
          {/* Container to center the panel */}
          <div className="w-full flex items-center h-full justify-center">
            {/* The actual dialog panel  */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={classNames(
                  { 'bg-white': theme === 'light' },
                  { 'bg-base-100': theme === 'dark' },
                  'overflow-auto no-scrollbar h-full min-h-full max-h-full mx-auto w-full max-w-4xl shadow-lg rounded-md',
                )}
              >
                {creatingFlow && (
                  <LoadWithText
                    size={SpinnerSizes.large}
                    text="Creating your flow"
                  />
                )}
                {(flowId || createdFlowId) && (
                  <Flow
                    flowId={flowId || createdFlowId}
                    deleteFlow={deleteFlow}
                  />
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
