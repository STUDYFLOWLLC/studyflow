import makeCourseOnTermAutomation from 'hooks/automation/makeCourseOnTermAutomation'
import { Automation } from 'hooks/automation/useAutomationDetails'
import { KeyedMutator } from 'swr'

export default function createCourseOnTermAutomation(
  folderId: string,
  automationDetails: Automation | undefined,
  mutateAutomationDetails: KeyedMutator<any>,
  courseOnTermId: number,
) {
  if (!automationDetails) return

  // mutate in backend
  makeCourseOnTermAutomation(
    automationDetails.AutomationID,
    courseOnTermId,
    folderId,
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
