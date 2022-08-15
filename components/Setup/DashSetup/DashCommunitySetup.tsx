import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import ButtonSpinner from 'components/spinners/ButtonSpinner'
import LoadWithText from 'components/spinners/LoadWithText'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { SpinnerSizes } from 'types/Loading'
import { SetupSteps } from 'types/SetupSteps'
import { changeUserSetupStep } from 'utils/user/userHandlers'
import StudentsInCourse from '../Community/StudentsInCourse'
import SetupHeader from '../Header'
import SetupStepTitle from '../SetupStepTitle'

export default function DashCommunitySetup() {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails, mutateUserDetails } = useUserDetails(user?.id)
  const { coursesOnTerm, coursesOnTermLoading } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0]?.TermID,
  )

  const [loading, setLoading] = useState(false)

  return (
    <div className="w-full flex flex-col items-center">
      <SetupHeader />
      <SetupStepTitle title="Community" />

      <div
        className={classNames(
          { 'border-gray-300 border-2 bg-gray-50': theme === 'light' },
          { 'bg-slate-700': theme === 'dark' },
          'w-72 sm:w-96 flex flex-col justify-center items-center p-4 rounded mt-4 mb-0',
        )}
      >
        {coursesOnTermLoading ? (
          <LoadWithText
            size={SpinnerSizes.medium}
            text="Finding classmates..."
          />
        ) : (
          <div>
            {coursesOnTerm.map((cot) => (
              <StudentsInCourse key={cot.CourseOnTermID} courseOnTerm={cot} />
            ))}
          </div>
        )}
        <button
          type="button"
          className="mt-4 alex-button"
          onClick={async () => {
            setLoading(true)
            await changeUserSetupStep(
              SetupSteps.COMPLETE,
              userDetails,
              mutateUserDetails,
            )
          }}
        >
          Finish setup
          <ButtonSpinner show={loading} />
        </button>
      </div>
    </div>
  )
}
