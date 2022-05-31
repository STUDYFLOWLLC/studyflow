import { ArrowsExpandIcon } from '@heroicons/react/outline'
import classnames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { animated, useSpring } from '@react-spring/web'

const projects = [
  {
    id: 1,
    title: 'L24 THREADS AND CONCURRENCY',
    initials: 'GA',
    team: 'CS2110',
    nextReview: 'Today',
    created: 'April 26, 2022',
    pinned: false,
    bgColorClass: 'bg-green-500',
  },
  {
    id: 2,
    title: '8.1 ORTHOGONAL COMPLEMENTS AND PROJECTIONS',
    initials: 'GA',
    team: 'MATH2210',
    nextReview: 'Today',
    created: 'April 25, 2022',
    pinned: false,
    bgColorClass: 'bg-indigo-500',
  },
  {
    id: 3,
    title: '9.1 THE MATRIX OF A LINEAR TRANSFORMATION',
    initials: 'GA',
    team: 'MATH2210',
    nextReview: 'in three days',
    created: 'April 23, 2022',
    pinned: false,
    bgColorClass: 'bg-indigo-500',
  },
  {
    id: 1,
    title: 'L23 HASHSETS',
    initials: 'GA',
    team: 'CS2110',
    nextReview: 'Today',
    created: 'April 21, 2022',
    pinned: false,
    bgColorClass: 'bg-green-500',
  },
  // More projects...
]

export default function FlowList() {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const openTextAnimationProps = useSpring({
    transform: show ? 'translateX(-10px)' : 'translateX(0px)',
    from: {
      transform: 'translateX(0px)',
    },
    config: {
      friction: 20,
      tension: 300,
    },
  })

  const openIconAnimationProps = useSpring({
    opacity: show ? 1 : 0,
    from: {
      opacity: 0,
    },
  })

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
                  'hidden md:table-cell px-3 py-3 border-b text-xs font-medium uppercase tracking-wider text-right',
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
            className={classnames({
              'bg-white divide-y divide-gray-100': theme === 'light',
            })}
          >
            {projects.map((project) => (
              <tr key={project.id}>
                <td className="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center space-x-3 lg:pl-2">
                    <div
                      className={classnames(
                        project.bgColorClass,
                        'flex-shrink-0 w-2.5 h-2.5 rounded-full',
                      )}
                      aria-hidden="true"
                    />
                    <a href="#" className="truncate hover:text-gray-600">
                      <span>
                        {project.title}{' '}
                        <span className="text-gray-500 font-normal">
                          in {project.team}
                        </span>
                      </span>
                    </a>
                  </div>
                </td>
                <td
                  className={classnames(
                    { 'text-gray-500': theme === 'light' },
                    'w-12 hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-right',
                  )}
                >
                  {project.created}
                </td>
                <td
                  className={classnames(
                    { 'text-gray-500': theme === 'light' },
                    'w-12 hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-right',
                  )}
                >
                  {project.nextReview}
                </td>

                <td
                  onMouseOver={() => setShow(true)}
                  onFocus={() => setShow(true)}
                  className="relative items-center px-6 py-3 text-right text-sm font-medium cursor-pointer"
                >
                  <animated.div style={{ ...openTextAnimationProps }}>
                    <a href="#" className="text-primary">
                      Open
                    </a>
                  </animated.div>
                  <animated.div style={{ ...openIconAnimationProps }}>
                    <ArrowsExpandIcon className="absolute top-3 right-3 w-4 mt-0.5 ml-1" />
                  </animated.div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
