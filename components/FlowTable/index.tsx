import classnames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import FlowTableLine from './FlowTableLine'

const flows = [
  {
    id: '1',
    title: 'L24 THREADS AND CONCURRENCY',
    initials: 'GA',
    course: 'CS2110',
    nextReview: 'Today',
    created: 'April 26, 2022',
    pinned: false,
    bgColorClass: 'bg-green-500',
  },
  {
    id: '2',
    title: '8.1 ORTHOGONAL COMPLEMENTS AND PROJECTIONS',
    initials: 'GA',
    course: 'MATH2210',
    nextReview: 'Today',
    created: 'April 25, 2022',
    pinned: false,
    bgColorClass: 'bg-indigo-500',
  },
  {
    id: '3',
    title: '9.1 THE MATRIX OF A LINEAR TRANSFORMATION',
    initials: 'GA',
    course: 'MATH2210',
    nextReview: 'in three days',
    created: 'April 23, 2022',
    pinned: false,
    bgColorClass: 'bg-indigo-500',
  },
  {
    id: '4',
    title: 'L23 HASHSETS',
    initials: 'GA',
    course: 'CS2110',
    nextReview: 'Today',
    created: 'April 21, 2022',
    pinned: false,
    bgColorClass: 'bg-green-500',
  },
]

export default function FlowList() {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="hidden mt-8 sm:block">
      <div
        className={classnames(
          { 'border-gray-200': theme === 'light' },
          'align-middle inline-block min-w-full border-b',
        )}
      >
        <table className="min-w-full">
          <thead>
            <tr
              className={classnames(
                { 'border-gray-200': theme === 'light' },
                'border-t',
              )}
            >
              <th
                className={classnames(
                  {
                    'border-gray-200 bg-gray-50 text-gray-500':
                      theme === 'light',
                  },
                  'px-6 py-3 border-b text-left text-xs font-medium uppercase tracking-wider',
                )}
              >
                <span className="lg:pl-2">Recent Flows</span>
              </th>
              <th
                className={classnames(
                  {
                    'border-gray-200 bg-gray-50 text-gray-500':
                      theme === 'light',
                  },
                  'hidden md:table-cell px-6 py-3 border-b text-center text-xs font-medium uppercase tracking-wider',
                )}
              >
                Created
              </th>
              <th
                className={classnames(
                  {
                    'border-gray-200 bg-gray-50 text-gray-500':
                      theme === 'light',
                  },
                  'hidden md:table-cell px-1 py-3 border-b text-xs font-medium uppercase tracking-wider',
                )}
              >
                Next Review
              </th>
              <p
                className={classnames(
                  {
                    'border-gray-200 bg-gray-50 text-gray-500':
                      theme === 'light',
                  },
                  'md:table-cell pr-6 py-3 border-b text-right text-xs font-medium  uppercase tracking-wider',
                )}
              />{' '}
            </tr>
          </thead>
          <tbody
            className={classnames(
              {
                'bg-white divide-y divide-gray-100': theme !== 'dark',
              },
              { 'divide-y divide-gray-50': theme === 'dark' },
            )}
          >
            {flows.map((flow) => (
              <FlowTableLine
                loading={false}
                key={flow.id}
                flowID={flow.id}
                bgColorClass={flow.bgColorClass}
                title={flow.title}
                course={flow.course}
                createdDate={flow.created}
                nextReview={flow.nextReview}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
