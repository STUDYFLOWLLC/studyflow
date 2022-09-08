import { ArrowsPointingOutIcon } from '@heroicons/react/24/outline'
import { animated, useSpring } from '@react-spring/web'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react'
import Skeleton from 'react-loading-skeleton'

interface Props {
  setCurrentFlow?: (flowId: string) => void
  flowID: string
  loading?: boolean
  showOpenIcon: boolean
  setShowOpenIcon: Dispatch<SetStateAction<boolean>>
}

export default function OpenFancy({
  setCurrentFlow,
  flowID,
  loading,
  showOpenIcon,
  setShowOpenIcon,
}: Props) {
  const openTextAnimationProps = useSpring({
    transform: showOpenIcon ? 'translateX(-8px)' : 'translateX(0px)',
    from: {
      transform: 'translateX(0px)',
    },
    config: {
      mass: 0.1,
      friction: 15,
      tension: 300,
    },
  })
  const router = useRouter()

  const openIconAnimationProps = useSpring({
    opacity: showOpenIcon ? 1 : 0,
    from: {
      opacity: 0,
    },
    config: {
      duration: 50,
    },
  })

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <td
        onClick={() => {
          if (setCurrentFlow) setCurrentFlow(flowID)
          else router.push(`/flow/${flowID}`)
        }}
        onKeyDown={() => {
          if (setCurrentFlow) setCurrentFlow(flowID)
          else router.push(`/flow/${flowID}`)
        }}
        onMouseOver={() => setShowOpenIcon(true)}
        onMouseLeave={() => setShowOpenIcon(false)}
        onFocus={() => setShowOpenIcon(true)}
        onBlur={() => setShowOpenIcon(false)}
        className="relative items-center px-6 py-3 text-right text-sm font-medium cursor-pointer"
      >
        {!loading ? (
          <>
            <animated.div style={{ ...openTextAnimationProps }}>
              <a href="#" className="text-primary brightness-90 font-semibold">
                Open
              </a>
            </animated.div>
            <animated.div style={{ ...openIconAnimationProps }}>
              <ArrowsPointingOutIcon className="text-gray-400 absolute top-3 right-3.5 w-4 mt-0.5 ml-1" />
            </animated.div>
          </>
        ) : (
          <Skeleton width={50} />
        )}
      </td>
    </>
  )
}
