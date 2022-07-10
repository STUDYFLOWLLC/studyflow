import { useSpring } from '@react-spring/web'
import classnames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

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
        </table>
      </div>
    </div>
  )
}
