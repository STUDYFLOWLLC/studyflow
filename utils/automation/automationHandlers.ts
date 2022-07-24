import makeAutomationLog from 'hooks/automation/makeAutomationLog'
import makeCourseOnTermAutomation from 'hooks/automation/makeCourseOnTermAutomation'
import { Automation } from 'hooks/automation/useAutomationDetails'
import { KeyedMutator } from 'swr'
import { FlowType, FlowVisibility } from 'types/Flow'

export default async function createCourseOnTermAutomation(
  folderId: string,
  defaultType: FlowType,
  defaultVisibility: FlowVisibility,
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
            AutomationLog: [
              {
                AutomationLogID: 0,
                Time: new Date().toISOString,
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
