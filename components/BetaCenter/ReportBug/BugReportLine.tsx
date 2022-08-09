/* eslint-disable react/destructuring-assignment */
import classNames from 'classnames'
import { BugReport } from 'hooks/beta/useBugReports'
import abbreviateDate from 'utils/abbreviateDate'

interface Props {
  bugReport: BugReport
}

export default function BugReportLine({ bugReport }: Props) {
  return (
    <div className="max-h-80 overflow-auto border p-1 flex items-center justify-between cursor-pointer">
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
