import { useUser } from '@supabase/supabase-auth-helpers/react'
import BugButtons from 'components/BetaCenter/ReportBug/BugButtons'
import LoadWithText from 'components/spinners/LoadWithText'
import BugPlate from 'dinnerplate/BugPlate'
import { MyValue } from 'dinnerplate/types/plateTypes'
import useBugReports, { BugReport } from 'hooks/beta/useBugReports'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'
import { SpinnerSizes } from 'types/Loading'
import BugReportLine from './BugReportLine'
import BugReportModal from './BugReportModal'

export default function ReportBug() {
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { bugReports, bugReportsLoading, mutateBugReports } = useBugReports()

  const [showReport, setShowReport] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [currentReport, setCurrentReport] = useState<BugReport | null>(null)

  const [value, setValue] = useState<MyValue>([
    {
      type: 'h1',
      children: [
        {
          text: 'Bug Title',
        },
      ],
    },
    {
      type: 'p',
      children: [
        {
          text: "Thanks for reporting a bug! Please enter as many details as you can below and we'll get it fixed soon!",
        },
      ],
    },
  ])

  return (
    <div className="flex flex-col items-center">
      <BugReportModal
        bugReport={currentReport}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      {!showReport ? (
        <div className="prose max-w-3xl mx-auto w-full py-2">
          {bugReportsLoading ? (
            <LoadWithText
              size={SpinnerSizes.medium}
              text="Loading bug reports..."
            />
          ) : (
            <div>
              <h1 className="mb-0 pb-0">Bug Reports</h1>
              <p className="my-1 p-0">
                Please check to see if your bug has already been reported!
              </p>
              <button
                type="button"
                className="alex-button my-2 mx-auto"
                onClick={() => setShowReport(true)}
              >
                Report Bug
              </button>
              {bugReports.map((br) => (
                <BugReportLine
                  key={br.BugReportID}
                  bugReport={br}
                  setModalOpen={setModalOpen}
                  setCurrentReport={setCurrentReport}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          <BugButtons value={value} setShowReport={setShowReport} />
          <BugPlate value={value} setValue={setValue} />
        </div>
      )}
    </div>
  )
}
