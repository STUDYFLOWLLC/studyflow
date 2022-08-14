import makeAutomationLog from 'hooks/automation/makeAutomationLog'
import makeCourseOnTermAutomation from 'hooks/automation/makeCourseOnTermAutomation'
import {
  mutateCourseOnTermAutomationDefaultRepetitionType,
  mutateCourseOnTermAutomationDefaultType,
  mutateCourseOnTermDefaultVisibility,
} from 'hooks/automation/mutateCourseOnTermAutomation'
import { Automation } from 'hooks/automation/useAutomationDetails'
import { KeyedMutator } from 'swr'
import { FlowType, FlowVisibility } from 'types/Flow'
import { RepetitionType } from 'types/Repetition'

export default async function createCourseOnTermAutomation(
  folderId: string,
  defaultType: FlowType,
  defaultVisibility: FlowVisibility,
  defaultRepetitionType: RepetitionType,
  automationDetails: Automation | undefined,
  mutateAutomationDetails: KeyedMutator<any>,
  courseOnTermId: number,
) {
  if (!automationDetails) return

  // mutate in backend
  const data = await makeCourseOnTermAutomation(
    automationDetails.AutomationID,
    courseOnTermId,
    folderId,
    defaultType,
    defaultVisibility,
    defaultRepetitionType,
  )
  makeAutomationLog(
    data.createCourseOnTermAutomation.CourseOnTermAutomationID,
    true,
    'Created Automation',
  )

  // mutate locally
  mutateAutomationDetails(
    {
      automation: {
        ...automationDetails,
        CourseOnTermAutomations: [
          ...automationDetails.CourseOnTermAutomations,
          {
            CourseOnTermAutomationID: 0,
            FolderID: folderId,
            DefaultType: defaultType,
            DefaultVibility: defaultVisibility,
            DefaultRepetitionType: defaultRepetitionType,
            AutomationLog: [
              {
                AutomationLogID: 0,
                Time: new Date().toISOString(),
                Success: true,
                Message: 'Created Automation',
                FK_CourseOnTermAutomationID: 0,
              },
            ],
            FK_AutomationID: automationDetails.AutomationID,
            FK_CourseOnTermID: courseOnTermId,
          },
        ],
      },
    },
    {
      revalidate: false,
    },
  )
}

export function changeCourseOnTermAutomationDefaultType(
  courseOnTermAutomationId: number,
  newDefaultType: FlowType,
  automationDetails: Automation | undefined,
  mutateAutomationDetails: KeyedMutator<any>,
) {
  // mutate in backend
  mutateCourseOnTermAutomationDefaultType(
    courseOnTermAutomationId,
    newDefaultType,
  )

  // mutate locally
  mutateAutomationDetails(
    {
      automation: {
        ...automationDetails,
        CourseOnTermAutomations: automationDetails?.CourseOnTermAutomations.map(
          (courseOnTermAutomation) => {
            if (
              courseOnTermAutomationId ===
              courseOnTermAutomation.CourseOnTermAutomationID
            ) {
              return {
                ...courseOnTermAutomation,
                DefaultType: newDefaultType,
              }
            }
            return courseOnTermAutomation
          },
        ),
      },
    },
    {
      revalidate: false,
    },
  )
}

export function changeCourseOnTermAutomationDefaultVisibility(
  courseOnTermAutomationId: number,
  newDefaultVisibility: FlowVisibility,
  automationDetails: Automation | undefined,
  mutateAutomationDetails: KeyedMutator<any>,
) {
  // mutate in backend
  mutateCourseOnTermDefaultVisibility(
    courseOnTermAutomationId,
    newDefaultVisibility,
  )

  // mutate locally
  mutateAutomationDetails(
    {
      automation: {
        ...automationDetails,
        CourseOnTermAutomations: automationDetails?.CourseOnTermAutomations.map(
          (courseOnTermAutomation) => {
            if (
              courseOnTermAutomationId ===
              courseOnTermAutomation.CourseOnTermAutomationID
            ) {
              return {
                ...courseOnTermAutomation,
                DefaultVisibility: newDefaultVisibility,
              }
            }
            return courseOnTermAutomation
          },
        ),
      },
    },
    {
      revalidate: false,
    },
  )
}

export function changeCourseOnTermAutomationDefaultRepetitionType(
  courseOnTermAutomationId: number,
  newDefaultRepetitionType: RepetitionType,
  automationDetails: Automation | undefined,
  mutateAutomationDetails: KeyedMutator<any>,
) {
  // mutate in backend
  mutateCourseOnTermAutomationDefaultRepetitionType(
    courseOnTermAutomationId,
    newDefaultRepetitionType,
  )

  // mutate locally
  mutateAutomationDetails(
    {
      automation: {
        ...automationDetails,
        CourseOnTermAutomations: automationDetails?.CourseOnTermAutomations.map(
          (courseOnTermAutomation) => {
            if (
              courseOnTermAutomationId ===
              courseOnTermAutomation.CourseOnTermAutomationID
            ) {
              return {
                ...courseOnTermAutomation,
                DefaultRepetitionType: newDefaultRepetitionType,
              }
            }
            return courseOnTermAutomation
          },
        ),
      },
    },
    {
      revalidate: false,
    },
  )
}
