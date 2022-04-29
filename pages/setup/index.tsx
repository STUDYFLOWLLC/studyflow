import ClassSearch from 'components/Forms/ClassSearch'
import SchoolSearch from 'components/Forms/SchoolSearch'

export default function index() {
  return (
    <div className="w-full flex flex-col items-center">
      <SchoolSearch />
      <ClassSearch />
    </div>
  )
}
