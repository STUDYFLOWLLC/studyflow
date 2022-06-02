import SchoolSearch from 'components/Forms/SchoolSearch'
import SetupHeader from 'components/Setup/Header'

export default function index() {
  return (
    <div className="w-full flex flex-col items-center">
      <SetupHeader />
      <SchoolSearch />
    </div>
  )
}
