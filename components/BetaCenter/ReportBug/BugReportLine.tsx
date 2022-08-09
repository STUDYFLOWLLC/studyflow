/* eslint-disable react/destructuring-assignment */
import classNames from 'classnames'
import { BugReport } from 'hooks/beta/useBugReports'
import abbreviateDate from 'utils/abbreviateDate'

interface Props {
  bugReport: BugReport
  setModalOpen: (modalOpen: boolean) => void
  setCurrentReport: (bugReport: BugReport) => void
}

export default function BugReportLine({
  bugReport,
  setModalOpen,
  setCurrentReport,
}: Props) {
  return (
    <div
      className="max-h-80 overflow-auto border p-1 flex items-center justify-between cursor-pointer"
      onClick={() => {
        setCurrentReport(bugReport)
        setModalOpen(true)
      }}
      onKeyDown={() => {
        setCurrentReport(bugReport)
        setModalOpen(true)
      }}
    >
      <div className="">
        <p className="p-0 m-0">
          <span className="font-bold">{bugReport.Title || 'Untitled'} </span>
          <span className="text-info">
            by {bugReport.FK_User?.Name || 'Anonymous'}
          </span>
        </p>
        <p
          className={classNames(
            { 'text-red-500': !bugReport.FixedTime },
            { 'text-green-500': bugReport.FixedTime },
            'p-0 m-0',
          )}
        >
          {!bugReport.FixedTime
            ? `Created ${abbreviateDate(new Date(bugReport.CreatedTime))}`
            : `Fixed ${abbreviateDate(new Date(bugReport.FixedTime))}`}
        </p>
      </div>
      <span className="font-bold text-primary">See details</span>
    </div>
  )
}
