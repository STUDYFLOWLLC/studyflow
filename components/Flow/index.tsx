import {
  ArrowsExpandIcon,
  CalendarIcon,
  CheckIcon,
  ClockIcon,
} from '@heroicons/react/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import MainSpinner from 'components/spinners/MainSpinner'
import {
  mutateFlowBody,
  mutateFlowCourseOnTerm,
  mutateFlowTitle,
  mutateFlowType,
} from 'hooks/flows/mutateFlow'
import useDashFlows from 'hooks/flows/useDashFlows'
import useFlowDetails from 'hooks/flows/useFlowDetails'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'
import Skeleton from 'react-loading-skeleton'
import { Block, FlowType } from 'types/Flow'
import { SpinnerSizes } from 'types/Loading'
import handleTimeStamp from 'utils/handleTimeStamp'
import FlowBody from './FlowBody'
import FlowCourse from './FlowCourse'
import FlowProperty from './FlowProperty'
import FlowTypeChooser from './FlowTypeChooser'

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
    userDetails.UserID,
  )

  const [saving, setSaving] = useState(false)

  const saveFlow = async (blocks: Block[]) => {
    setSaving(true)
    const data = await mutateFlowBody(
      flowDetails.FlowID,
      JSON.stringify(blocks),
    )
    if (data) {
      setSaving(false)
    }
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
        <div>
          <ArrowsExpandIcon className="w-5 h-5 text-info hover:text-current cursor-pointer" />
        </div>
        <div className="flex items-center ">
          <div className="mr-4 text-info hover:text-current cursor-pointer flex items-center">
            <ClockIcon className="w-5 h-5 mr-1" />
            <span className="">3 days </span>
          </div>
          <div className="transition-all duration-500">
            {saving ? (
              <MainSpinner size={SpinnerSizes.small} />
            ) : (
              <CheckIcon className="w-5 h-5 text-info" />
            )}
          </div>
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
        <div className="border-l-2 ml-1 mt-4 p-0 mb-2">
          <FlowProperty
            Icon={CalendarIcon}
            property="Date"
            value={handleTimeStamp(new Date().toISOString())}
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
          initialBlocks={JSON.parse(flowDetails.Body)}
          saveFlow={saveFlow}
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
