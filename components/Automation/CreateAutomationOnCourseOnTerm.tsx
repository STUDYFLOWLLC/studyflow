import { useUser } from '@supabase/supabase-auth-helpers/react'
import useAutomationDetails from 'hooks/automation/useAutomationDetails'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'
import useDrivePicker from 'react-google-drive-picker'
import toast from 'react-hot-toast'
import { FlowType, FlowVisibility } from 'types/Flow'
import { RepetitionType } from 'types/Repetition'
import createCourseOnTermAutomation from 'utils/automation/automationHandlers'
import RepetitionTypeChooser from './RepetitionTypeChooser'
import TypeChooser from './TypeChooser'
import VisibilityChooser from './VisibilityChooser'

interface Props {
  courseOnTerm: CourseOnTerm
}

export default function CreateAutomationOnCourseOnTerm({
  courseOnTerm,
}: Props) {
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { automationDetails, mutateAutomationDetails } = useAutomationDetails(
    userDetails?.UserID,
  )

  const [openPicker, authResponse] = useDrivePicker()

  const [defaultType, setDefaultType] = useState<FlowType>(FlowType.LECTURE)
  const [defaultVisibility, setDefaultVisibility] = useState<FlowVisibility>(
    FlowVisibility.PUBLIC,
  )
  const [defaultRepetitionType, setDefaultRepetitionType] =
    useState<RepetitionType>(RepetitionType.FOURTHIRTY)

  const handleOpenPicker = () => {
    openPicker({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
      developerKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '',
      viewId: 'FOLDERS',
      showUploadView: true,
      setIncludeFolders: true,
      setSelectFolderEnabled: true,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data?.docs?.[0]?.id) {
          createCourseOnTermAutomation(
            data.docs[0].id,
            defaultType,
            defaultVisibility,
            defaultRepetitionType,
            automationDetails,
            mutateAutomationDetails,
            courseOnTerm.CourseOnTermID,
          )
          toast.success('Automation created!')
        }
      },
    })
  }

  return (
    <div className="flex flex-col items-center">
      <TypeChooser
        mutator={(newType: FlowType) => setDefaultType(newType)}
        type={defaultType}
        loading={false}
      />
      <VisibilityChooser
        mutator={(newVisibility: FlowVisibility) =>
          setDefaultVisibility(newVisibility)
        }
        visibility={defaultVisibility}
        loading={false}
      />
      <RepetitionTypeChooser
        mutator={(newRepetitionType: RepetitionType) =>
          setDefaultRepetitionType(newRepetitionType)
        }
        repetitionType={defaultRepetitionType}
        loading={false}
      />
      <button
        type="button"
        className="alex-button mt-2 mb-3"
        onClick={() => handleOpenPicker()}
      >
        Select Drive folder
      </button>
      <p className="mb-2 mt-0 p-0 text-sm">
        Please sign in with the same google account you previously connected.
      </p>
    </div>
  )
}
