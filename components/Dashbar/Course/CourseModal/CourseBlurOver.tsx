import { useUser } from '@supabase/supabase-auth-helpers/react'
import MainSpinner from 'components/spinners/MainSpinner'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { SpinnerSizes } from 'types/Loading'
import { SetupSteps } from 'types/SetupSteps'
import { addBlankCourse } from 'utils/setup/courseHandlers'
import { changeUserSetupStep } from 'utils/user/userHandlers'

interface Props {
  loading: boolean
  setLoading: (loading: boolean) => void
  setShowAdd: (showAdd: boolean) => void
  inSetup?: boolean
}

export default function CourseBlurOver({
  loading,
  setLoading,
  setShowAdd,
  inSetup,
}: Props) {
  const { user } = useUser()
  const { userDetails, mutateUserDetails } = useUserDetails(user?.id)
  const { coursesOnTerm, mutateCoursesOnTerm } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0]?.TermID,
  )

  return (
    <div className="absolute w-full h-full flex flex-col items-center justify-center z-20">
      <button
        type="button"
        className="alex-button"
        onClick={async () => {
          setLoading(true)
          await addBlankCourse(userDetails, coursesOnTerm, mutateCoursesOnTerm)
          setShowAdd(false)
          setLoading(false)
        }}
      >
        <span className="flex items-center">
          Add course{' '}
          {loading && (
            <span className="ml-2">
              <MainSpinner size={SpinnerSizes.small} />
            </span>
          )}
        </span>
      </button>
      {inSetup && coursesOnTerm.length > 0 && (
        <button
          type="button"
          className="alex-button mt-4"
          onClick={async () => {
            setLoading(true)
            await changeUserSetupStep(
              SetupSteps.COMPLETE,
              userDetails,
              mutateUserDetails,
            )
            setLoading(false)
          }}
        >
          <span className="flex items-center">
            I&apos;m done adding courses.
            {loading && (
              <span className="ml-2">
                <MainSpinner size={SpinnerSizes.small} />
              </span>
            )}
          </span>
        </button>
      )}
    </div>
  )
}
