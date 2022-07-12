import {
  ArrowsExpandIcon,
  CheckIcon,
  ClockIcon,
} from '@heroicons/react/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import Tippy from '@tippyjs/react'
import classNames from 'classnames'
import MainSpinner from 'components/spinners/MainSpinner'
import { defaultBody } from 'hooks/flows/makeFlow'
import mutateFlowVisibility, {
  mutateFlowBody,
  mutateFlowCourseOnTerm,
  mutateFlowTitle,
  mutateFlowType,
  mutateUserEnteredDate,
} from 'hooks/flows/mutateFlow'
import useDashFlows from 'hooks/flows/useDashFlows'
import useFlowDetails from 'hooks/flows/useFlowDetails'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'
import Skeleton from 'react-loading-skeleton'
import { Block, FlowType, FlowVisibility } from 'types/Flow'
import { SpinnerSizes } from 'types/Loading'
import FlowBody from './FlowBody'
import FlowCourse from './FlowCourse'
import FlowDate from './FlowDate'
import FlowTypeChooser from './FlowTypeChooser'
import FlowVisibilityChooser from './FlowVisibilityChooser'

interface Props {
  flowId: string
}

export default function Flow({ flowId }: Props) {
  const { flowDetails, flowDetailsLoading, mutateFlowDetails } =
    useFlowDetails(flowId)
  const { user } = useUser()
  const { userDetails, userDetailsLoading } = useUserDetails(user?.id)
  const { coursesOnTerm, coursesOnTermLoading } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0]?.TermID,
  )
  const { dashFlows, dashFlowsLoading, mutateDashFlows } = useDashFlows(
    userDetails?.UserID,
  )

  const [fauxSaving, setFauxSaving] = useState(false)
  const [saving, setSaving] = useState(false)

  const saveFlow = async (blocks: Block[]) => {
    setSaving(true)

    // mutate locally
    mutateFlowDetails(
      {
        mutatedFlow: { ...flowDetails, Body: JSON.stringify(blocks) },
        mutate: true,
      },
      { revalidate: false },
    )
    mutateDashFlows(
      {
        mutatedFlows: dashFlows.map((flow) =>
          flow.FlowID === flowId
            ? { ...flow, Body: JSON.stringify(blocks) }
            : flow,
        ),
        mutate: true,
      },
      { revalidate: false },
    )

    console.log(flowDetails)

    // change in backend
    const data = await mutateFlowBody(
      flowDetails.FlowID,
      JSON.stringify(blocks),
    )
    if (data) {
      setSaving(false)
    }
  }

  const changeVisibility = async (newVisibility: FlowVisibility) => {
    // change in backend
    mutateFlowVisibility(flowId, newVisibility)

    // mutate locally
    mutateFlowDetails(
      {
        mutatedFlow: { ...flowDetails, Visibility: newVisibility },
        mutate: true,
      },
      { revalidate: false },
    )
    mutateDashFlows(
      {
        mutatedFlows: dashFlows.map((flow) =>
          flow.FlowID === flowId
            ? { ...flow, Visibility: newVisibility }
            : flow,
        ),
        mutate: true,
      },
      { revalidate: false },
    )
  }

  const editTitle = (newTitle: string) => {
    // change in backend
    mutateFlowTitle(flowId, newTitle)

    // mutate locally
    mutateFlowDetails(
      {
        mutatedFlow: {
          ...flowDetails,
          Title: newTitle,
        },
        mutate: true,
      },
      {
        revalidate: false,
      },
    )
    mutateDashFlows(
      {
        mutatedFlows: dashFlows.map((flow) =>
          flow.FlowID === flowId ? { ...flow, Title: newTitle } : flow,
        ),
        mutate: true,
      },
      { revalidate: false },
    )
  }

  const changeType = (newType: FlowType) => {
    // change in backend
    mutateFlowType(flowId, newType)

    // mutate locally
    mutateFlowDetails(
      { mutatedFlow: { ...flowDetails, Type: newType }, mutate: true },
      { revalidate: false },
    )
    mutateDashFlows(
      {
        mutatedFlows: dashFlows.map((flow) =>
          flow.FlowID === flowId ? { ...flow, Type: newType } : flow,
        ),
        mutate: true,
      },
      { revalidate: false },
    )
  }

  const changeDate = (newDate: Date) => {
    const dateAsString = newDate.toISOString()

    // change in backend
    mutateUserEnteredDate(flowId, dateAsString)

    // mutate locally
    mutateFlowDetails(
      {
        mutatedFlow: {
          ...flowDetails,
          UserEnteredDate: dateAsString,
        },
        mutate: true,
      },
      { revalidate: false },
    )
    mutateDashFlows(
      {
        mutatedFlows: dashFlows.map((flow) =>
          flow.FlowID === flowId
            ? { ...flow, UserEnteredDate: dateAsString }
            : flow,
        ),
        mutate: true,
      },
      { revalidate: false },
    )
  }

  const changeCourse = (
    newId: number,
    newNickname: string,
    newCode: string,
    newColor: string,
  ) => {
    // change in backend
    mutateFlowCourseOnTerm(flowDetails.FlowID, newId)

    // mutate locally
    mutateFlowDetails(
      {
        mutatedFlow: {
          ...flowDetails,
          FK_CourseOnTermID: newId,
          FK_CourseOnTerm: {
            Nickname: newNickname,
            FK_Course: {
              Code: newCode,
            },
          },
        },
        mutate: true,
      },
      {
        revalidate: false,
      },
    )
    mutateDashFlows(
      {
        mutatedFlows: dashFlows.map((flow) =>
          flow.FlowID === flowId
            ? {
                ...flow,
                FK_CourseOnTerm: {
                  Color: newColor,
                  Nickname: newNickname,
                  FK_Course: {
                    Code: newCode,
                  },
                },
              }
            : flow,
        ),
        mutate: true,
      },
      { revalidate: false },
    )
  }

  return (
    <div className="max-h-full">
      <div className="m-4 flex justify-between items-center">
        <Tippy content="Open as page" arrow={false} delay={750} offset={[0, 5]}>
          <div>
            <ArrowsExpandIcon className="w-5 h-5 text-info hover:text-current cursor-pointer" />
          </div>
        </Tippy>

        <div className="flex items-center">
          <FlowVisibilityChooser
            loading={flowDetailsLoading}
            visibility={flowDetails?.Visibility}
            mutator={changeVisibility}
          />
          <Tippy
            content="Next Review In"
            arrow={false}
            delay={750}
            offset={[0, 5]}
          >
            <div className="mr-4 text-info hover:text-current cursor-pointer flex items-center">
              <ClockIcon className="w-5 h-5 mr-1" />
              <span className="">3 days </span>
            </div>
          </Tippy>
          <Tippy
            content={
              fauxSaving || saving || flowDetailsLoading
                ? 'saving changes'
                : 'all changes saved'
            }
            arrow={false}
            delay={750}
            offset={[0, 5]}
          >
            <div className="transition-all duration-500 h-5">
              {fauxSaving || saving || flowDetailsLoading ? (
                <MainSpinner size={SpinnerSizes.small} />
              ) : (
                <CheckIcon className="w-5 h-5 text-info" />
              )}
            </div>
          </Tippy>
        </div>
      </div>
      <div className="prose border-b pb-4 mb-4 w-full max-w-3xl mx-auto">
        <div className="flex items-baseline">
          {!flowDetailsLoading ? (
            <>
              <ContentEditable
                tagName="h1"
                className={classNames(
                  { 'text-info': !flowDetails?.Title },
                  'font-medium m-0 p-0 outline-0',
                )}
                onChange={(e: ContentEditableEvent) =>
                  editTitle(e.target.value)
                }
                html={flowDetails?.Title}
                placeholder="Untitled"
              />
              <FlowTypeChooser
                loading={flowDetailsLoading}
                type={flowDetails?.Type}
                mutator={changeType}
              />
            </>
          ) : (
            <div className="flex">
              <div>
                <Skeleton className="mr-3 p-0 w-48 h-12" />
              </div>
              <div className="mt-3">
                <Skeleton className="mr-3 p-0 w-36 h-8" />
              </div>
            </div>
          )}
        </div>
        <div className="border-l-2 ml-1 mt-4 mb-2">
          <FlowDate
            loading={flowDetailsLoading}
            userEnteredDate={
              flowDetails?.UserEnteredDate || new Date().toISOString()
            }
            setUserEnteredDate={changeDate}
          />
          <FlowCourse
            title={
              flowDetailsLoading
                ? 'Course'
                : flowDetails?.FK_CourseOnTerm.Nickname ||
                  flowDetails?.FK_CourseOnTerm.FK_Course.Code
            }
            coursesOnTermSmall={
              coursesOnTerm
                ? coursesOnTerm.map((course) => ({
                    CourseOnTermID: course.CourseOnTermID,
                    Nickname: course.Nickname,
                    Code: course.FK_Course.Code,
                    Color: course.Color,
                    mutator: changeCourse,
                  }))
                : []
            }
            loading={flowDetailsLoading}
          />
        </div>
      </div>
      {!flowDetailsLoading ? (
        <FlowBody
          initialBlocks={JSON.parse(flowDetails.Body) || defaultBody}
          saveFlow={saveFlow}
          setFauxSaving={setFauxSaving}
        />
      ) : (
        <div className="flex flex-col justify-center w-full h-80 max-h-full">
          <div className="flex justify-center">
            <MainSpinner size={SpinnerSizes.medium} />
          </div>
        </div>
      )}
    </div>
  )
}
