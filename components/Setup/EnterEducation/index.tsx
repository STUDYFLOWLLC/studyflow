import SchoolSearch from 'components/Forms/SchoolSearch'
import SetupHeader from 'components/Setup/Header'
import SetupStepTitle from '../SetupStepTitle'

export default function index() {
  return (
    <div className="w-full flex flex-col items-center">
      <SetupHeader />
      <SetupStepTitle title="Education" />
      <SchoolSearch />
    </div>
  )
}
