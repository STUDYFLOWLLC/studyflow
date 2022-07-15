import { CheckIcon } from '@heroicons/react/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import Tippy from '@tippyjs/react'
import classNames from 'classnames'
import MainSpinner from 'components/spinners/MainSpinner'
import useDashFlows from 'hooks/flows/useDashFlows'
import useCoursesOnTerm, { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useEffect, useState } from 'react'
import { SpinnerSizes } from 'types/Loading'
import { TOOLTIP_DELAY, TOOLTIP_OFFSET } from 'types/Magic'
import { changeCourseNickname } from 'utils/setup/courseHandlers'

interface Props {
  course: CourseOnTerm
}

export default function InputCourseNickname({ course }: Props) {
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { coursesOnTerm, mutateCoursesOnTerm } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0]?.TermID,
  )
  const { dashFlows, mutateDashFlows } = useDashFlows(userDetails?.UserID)

  const [editingNickname, setEditingNickname] = useState(false)
  const [saving, setSaving] = useState(false)
  const [inputValue, setInputValue] = useState(
    course.Nickname || course.FK_Course.Code,
  )

  useEffect(
    () => setInputValue(course.Nickname || course.FK_Course.Code),
    [course],
  )

  return (
    <Tippy
      content="Change course nickname"
      delay={TOOLTIP_DELAY}
      offset={TOOLTIP_OFFSET}
    >
      <div className="w-72 mx-auto relative">
        <input
          className="bg-transparent text-center first-line:outline-none focus:outline-none focus:border-0 focus:ring-0 border-0  h-full w-full rounded-md text-lg"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
            changeCourseNickname(
              course.CourseOnTermID,
              e.target.value,
              coursesOnTerm,
              mutateCoursesOnTerm,
              dashFlows,
              mutateDashFlows,
              setSaving,
            )
          }}
          onFocus={() => setEditingNickname(true)}
          onBlur={() => setEditingNickname(false)}
        />
        <div
          className={classNames(
            { 'w-4/5': editingNickname },
            { 'w-1/3': !editingNickname },
            'transition-all h-0.5 bg-primary mx-auto',
          )}
        />
        {editingNickname && (
          <div
            className={classNames(
              { 'top-0': !saving },
              { 'top-1 transition-none': saving },
              'transition-all duration-300 w-6 h-6 absolute right-6',
            )}
          >
            {saving ? (
              <MainSpinner size={SpinnerSizes.small} />
            ) : (
              <CheckIcon className="w-6 h-6 text-info" />
            )}
          </div>
        )}
      </div>
    </Tippy>
  )
}
