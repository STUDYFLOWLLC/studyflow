import { School, TermType } from '@prisma/client'
import { User } from '@supabase/supabase-auth-helpers/react'
import SchoolSearch from 'components/Forms/School/SchoolSearch'
import SchoolDisplay from 'components/Setup/EnterEducation/SchoolDisplay'
import SetupHeader from 'components/Setup/Header'
import SetupStepTitle from 'components/Setup/SetupStepTitle'
import MainSpinner from 'components/spinners/MainSpinner'
import setUserSchool from 'hooks/setup/setUserSchool'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { SpinnerSizes } from 'types/Loading'

interface Props {
  user: User
}

export default function index({ user }: Props) {
  const [settingSchool, setSettingSchool] = useState(false)
  const [showSchoolDetails, setShowSchoolDetails] = useState(false)
  const [selectedSchool, setSelectedSchool] = useState<School>({
    SchoolID: 0,
    Name: '',
    HasClassSupport: false,
    TermType: TermType.SEMESTER,
    SearchIndex: '',
  })

  const updateSchoolinDB = async (school: School) => {
    setSettingSchool(true)
    setSelectedSchool(school)
    const data = await setUserSchool(user.email || '', school.SchoolID)
    if (data.updateUser.UserID) {
      toast.success('School updated!')
      setShowSchoolDetails(true)
      setSettingSchool(false)
    }
  }

  return (
    <div className="w-full flex flex-col items-center">
      <Toaster position="top-center" />
      <SetupHeader step={1} />
      <SetupStepTitle title="Education" />
      {settingSchool && (
        <div className="mx-auto">
          <MainSpinner size={SpinnerSizes.medium} />
        </div>
      )}
      {!showSchoolDetails && !settingSchool && (
        <SchoolSearch
          selectedSchool={selectedSchool}
          updateSchoolinDB={updateSchoolinDB}
        />
      )}
      {showSchoolDetails && (
        <SchoolDisplay user={user} selectedSchool={selectedSchool} />
      )}
    </div>
  )
}
