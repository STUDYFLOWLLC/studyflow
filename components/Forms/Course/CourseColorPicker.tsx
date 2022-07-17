import { useUser } from '@supabase/supabase-auth-helpers/react'
import Tippy from '@tippyjs/react'
import classnames from 'classnames'
import useDashFlows from 'hooks/flows/useDashFlows'
import useCoursesOnTerm, { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { bgColor } from 'types/Colors'
import { TOOLTIP_OFFSET } from 'types/Magic'
import { changeCourseColor } from 'utils/setup/courseHandlers'

interface Props {
  course: CourseOnTerm
}

export default function CourseColorPicker({ course }: Props) {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { coursesOnTerm, mutateCoursesOnTerm } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0]?.TermID,
  )
  const { dashFlows, mutateDashFlows } = useDashFlows(userDetails?.UserID)

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div
      className={classnames(
        { 'border-2 border-gray-300': theme === 'light' },
        { 'bg-base-100': theme === 'dark' },
        'max-w-xs grid grid-cols-6 justify-self-center justify-center px-2 py-1 m-2 rounded-md',
      )}
    >
      {Object.values(bgColor).map((color) => (
        <Tippy
          key={color}
          disabled={color !== bgColor.DEFAULT}
          content="Do you really want no background color?"
          delay={0}
          offset={TOOLTIP_OFFSET}
        >
          <div
            className={classnames(
              {
                'ring-2 ring-gray-500 ':
                  theme === 'light' && course?.Color === color,
              },
              {
                'ring-2 ring-gray-100':
                  theme === 'dark' && course?.Color === color,
              },
              {
                'border-2 border-primary': color === bgColor.DEFAULT,
              },
              color,
              'ring-offset-1 w-5 h-5 m-2 rounded-full cursor-pointer',
            )}
            onClick={() =>
              changeCourseColor(
                course?.CourseOnTermID,
                color as bgColor,
                coursesOnTerm,
                mutateCoursesOnTerm,
                dashFlows,
                mutateDashFlows,
              )
            }
            onKeyDown={() =>
              changeCourseColor(
                course?.CourseOnTermID,
                color as bgColor,
                coursesOnTerm,
                mutateCoursesOnTerm,
                dashFlows,
                mutateDashFlows,
              )
            }
          />
        </Tippy>
      ))}
    </div>
  )
}
