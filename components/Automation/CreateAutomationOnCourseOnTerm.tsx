import { CheckIcon } from '@heroicons/react/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import useAutomationDetails from 'hooks/automation/useAutomationDetails'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'
import useDrivePicker from 'react-google-drive-picker'
import toast from 'react-hot-toast'
import createCourseOnTermAutomation from 'utils/automation/automationHandlers'

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

  const [folderName, setFolderName] = useState('')
  const [folderId, setFolderId] = useState('')

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
      <p className="mb-2 mt-0 p-0 text-center">
        To create an automation for this course, please select the Google Drive
        folder where your notes are backed up.
      </p>
      {!folderName || !folderId ? (
        <button
          type="button"
          className="alex-button mb-2"
          onClick={() => handleOpenPicker()}
        >
          Select Drive folder
        </button>
      ) : (
        <button
          type="button"
          disabled
          className="alex-button-outline mb-2 flex items-center"
        >
          {folderName}
          <CheckIcon className="ml-2 w-5 h-5 text-green-400" />
        </button>
      )}
    </div>
  )
}
