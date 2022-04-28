import AppleButton from 'components/Auth/AppleButton'
import BreadCrumb from 'components/Design/BreadCrumb'
import FlashCard from 'components/Design/FlashCard'
import Spinner from 'components/Design/Spin'
import SVG from 'components/Design/SVG'
import ToastTester from 'components/Design/ToastTester'

export default function index() {
  return (
    <div className="p-4">
      <Spinner />
      <FlashCard />
      <BreadCrumb />
      <ToastTester />
      <AppleButton />
      <SVG />
    </div>
  )
}
