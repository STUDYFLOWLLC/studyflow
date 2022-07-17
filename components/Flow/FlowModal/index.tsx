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
  firstCourse?: CourseOnTerm
  flowId?: string
  setCurrentFlow?: (flowId: string) => void
  createAs?: FlowType | null // only pass this if you want to create a new flow on mount
  setCreateAs?: (value: FlowType | null) => void
}

export default function index({
  isOpen,
  firstCourse,
  flowId,
  setCurrentFlow,
  createAs,
  setCreateAs,
}: Props) {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { dashFlows, mutateDashFlows } = useDashFlows(userDetails?.UserID)

  const [mounted, setMounted] = useState(false)
  const [creatingFlow, setCreatingFlow] = useState(false)
  const [createdFlowId, setCreatedFlowId] = useState<string>('')

  const closeFlowModal = () => {
    if (setCurrentFlow) setCurrentFlow('')
    if (setCreateAs) setCreateAs(null)
    if (createdFlowId) setCreatedFlowId('')
  }

  const createFlow = async () => {
    if (!createAs || createdFlowId) return
    setCreatingFlow(true)

    const id = uuid()

    // add flow locally
    mutateDashFlows(
      {
        mutatedFlows: [
          ...dashFlows,
          {
            FlowID: id,
            Title: 'Untitled',
            Type: createAs || FlowType.LECTURE,
            CreatedTime: new Date().toISOString(),
            LastOpened: new Date().toISOString(),
            UserEnteredDate: new Date().toISOString(),
            Visibility: FlowVisibility.PRIVATE,
            FK_CourseOnTerm: {
              Nickname: firstCourse?.Nickname,
              Color: firstCourse?.Color,
              FK_Course: {
                Code: firstCourse?.FK_Course?.Code,
              },
            },
          },
        ],
        mutate: true,
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

    closeFlowModal()
  }

  useEffect(() => {
    setMounted(true)
    createFlow()
  }, [isOpen])

  if (!mounted) return null

  return (
    <Transition appear show={!!flowId || !!createdFlowId} as={Fragment}>
      <Dialog
        open={!!flowId || !!createdFlowId}
        onClose={() => closeFlowModal()}
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
