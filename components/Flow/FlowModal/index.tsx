import { Dialog, Transition } from '@headlessui/react'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import Flow from 'components/Flow'
import LoadWithText from 'components/spinners/LoadWithText'
import makeFlow from 'hooks/flows/makeFlow'
import useDashFlows from 'hooks/flows/useDashFlows'
import useCoursesOnTerm, { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import { FlowType, FlowVisibility } from 'types/Flow'
import { SpinnerSizes } from 'types/Loading'
import bodyFromType from 'utils/flows/bodyFromType'
import titleFromType from 'utils/flows/titleFromType'
import { v4 as uuid } from 'uuid'

interface Props {
  isOpen: boolean
  flowId?: string
  setCurrentFlow?: (flowId: string) => void
  createAs?: FlowType | null // only pass this if you want to create a new flow on mount
  setCreateAs?: (value: FlowType | null) => void
}

export default function index({
  isOpen,
  flowId,
  setCurrentFlow,
  createAs,
  setCreateAs,
}: Props) {
  const { theme, setTheme } = useTheme()
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { dashFlows, mutateDashFlows } = useDashFlows(userDetails?.UserID)
  const { coursesOnTerm, mutateCoursesOnTerm } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0].TermID,
  )

  const [mounted, setMounted] = useState(false)
  const [dragSetter, setDragSetter] = useState(false)
  const [creatingFlow, setCreatingFlow] = useState(false)
  const [createdFlowId, setCreatedFlowId] = useState<string>('')
  const [showChooseCourse, setShowChooseCourse] = useState(false)

  const closeFlowModal = () => {
    if (setCurrentFlow) setCurrentFlow('')
    if (setCreateAs) setCreateAs(null)
    if (createdFlowId) setCreatedFlowId('')
    setShowChooseCourse(false)
  }

  const createFlow = async (course: CourseOnTerm) => {
    if (!createAs || createdFlowId || creatingFlow) return
    setCreatingFlow(true)

    const id = uuid()

    // add flow locally
    mutateDashFlows(
      {
        mutatedFlows: [
          ...dashFlows,
          {
            FlowID: id,
            Title: titleFromType(createAs),
            Body: bodyFromType(createAs),
            Type: createAs || FlowType.LECTURE,
            CreatedTime: new Date().toISOString(),
            LastOpened: new Date().toISOString(),
            UserEnteredDate: new Date().toISOString(),
            Visibility: FlowVisibility.PRIVATE,
            FK_CourseOnTerm: {
              Nickname: course?.Nickname,
              Color: course?.Color,
              FK_Course: {
                Code: course?.FK_Course?.Code,
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
      course?.CourseOnTermID || 0,
      userDetails?.DefaultVisibility,
      titleFromType(createAs),
      bodyFromType(createAs),
    )

    if (data) {
      setCreatedFlowId(id)
      setCreatingFlow(false)
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setShowChooseCourse(!!createAs)
    setDragSetter(false)
  }, [isOpen])

  if (!mounted) return null

  return (
    <Transition
      show={!!flowId || !!createdFlowId || creatingFlow || showChooseCourse}
      as={Fragment}
    >
      <Dialog
        open={!!flowId || !!createdFlowId || creatingFlow || showChooseCourse}
        onClose={() => closeFlowModal()}
        className="relative z-50 w-full h-screen"
        id="flow-modal"
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
        <div className="w-full fixed inset-0 h-full my-auto flex items-center justify-center">
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
                  { 'w-full': dragSetter },
                  { 'w-[99%]': !dragSetter },
                  ' pb-16 h-5/6 overflow-y-auto overflow-x-hidden max-w-4xl shadow-lg rounded-md',
                )}
              >
                {showChooseCourse ? (
                  <div className="prose mx-auto mt-12">
                    <h2 className="text-center">
                      Which course would you like to create your new{' '}
                      {createAs?.toString().toLowerCase()} in?
                    </h2>
                    <div className="flex justify-between">
                      {coursesOnTerm.map((course) => (
                        <button
                          key={course.CourseOnTermID}
                          type="button"
                          className={classNames(
                            course.Color,
                            'alex-button w-32 text-white',
                          )}
                          onClick={() => {
                            setShowChooseCourse(false)
                            createFlow(course)
                          }}
                        >
                          {course.Nickname}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    {creatingFlow && (
                      <LoadWithText
                        size={SpinnerSizes.medium}
                        text="Creating your flow"
                      />
                    )}
                    {(flowId || createdFlowId) && (
                      <Flow
                        flowId={flowId || createdFlowId}
                        closeModal={closeFlowModal}
                        setDragSetter={setDragSetter}
                      />
                    )}
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
