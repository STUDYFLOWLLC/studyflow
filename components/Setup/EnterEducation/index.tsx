import { User } from '@supabase/supabase-auth-helpers/react'
import SchoolSearch from 'components/Forms/School/SchoolSearch'
import SetupHeader from 'components/Setup/Header'
import SetupStepTitle from 'components/Setup/SetupStepTitle'
import { School } from 'graphql/generated-graphql'
import setUserSchool from 'hooks/setup/setUserSchool'
import { useState } from 'react'

interface Props {
  user: User
}

export default function index({ user }: Props) {
  const [selectedSchool, setSelectedSchool] = useState<School>({
    SchoolID: 0,
    Name: '',
    HasClassSupport: false,
    FK_Course: [],
  })

  const updateSchoolinDB = (school: School) => {
    console.log('go')
    setSelectedSchool(school)
    setUserSchool(user.email || '', school.SchoolID)
  }

  return (
    <div className="w-full flex flex-col items-center">
      <SetupHeader step={1} />
      <SetupStepTitle title="Education" />
      <SchoolSearch
        selectedSchool={selectedSchool}
        setSelectedSchool={setSelectedSchool}
        updateSchoolinDB={updateSchoolinDB}
      />
    </div>
  )
}
