import SchoolSearch from 'components/Forms/School/SchoolSearch'
import SetupHeader from 'components/Setup/Header'
import { useState } from 'react'
import SetupStepTitle from '../SetupStepTitle'

export default function index() {
  const [selectedSchool, setSelectedSchool] = useState('')

  return (
    <div className="w-full flex flex-col items-center">
      <SetupHeader step={1} />
      <SetupStepTitle title="Education" />
      <SchoolSearch
        selectedSchool={selectedSchool}
        setSelectedSchool={setSelectedSchool}
      />
    </div>
  )
}
