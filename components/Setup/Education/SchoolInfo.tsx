import { BadgeCheckIcon } from '@heroicons/react/outline'
import { School } from '@prisma/client'
import useCourseCount from 'hooks/school/useCourseCount'
import useFlowCount from 'hooks/school/useFlowCount'
import useProfessorCount from 'hooks/school/useProfessorCount'
import useUserCount from 'hooks/school/useUserCount'
import Skeleton from 'react-loading-skeleton'

interface Props {
  selectedSchool: School | null
}

export default function SchoolInfo({ selectedSchool }: Props) {
  if (!selectedSchool) return null

  const { courseCount, courseCountLoading } = useCourseCount(
    selectedSchool.SchoolID,
  )
  const { professorCount, professorCountLoading } = useProfessorCount(
    selectedSchool.SchoolID,
  )
  const { userCount, userCountLoading } = useUserCount(selectedSchool.SchoolID)
  const { flowCount, flowCountLoading } = useFlowCount(selectedSchool.SchoolID)

  return (
    <div className="relative prose w-full border-b-2 mb-4 pb-5">
      <div className="relative w-full">
        <h3 className="m-0 flex items-center">
          {selectedSchool.Name}{' '}
          <div
            className="tooltip tooltip-right pl-2"
            data-tip={`Studyflow officially supports ${selectedSchool.Name} and actively updates their class roster.`}
          >
            <BadgeCheckIcon className="w-6 h-6" />
          </div>
        </h3>

        <div className="flex">
          {courseCountLoading ? (
            <Skeleton width={100} />
          ) : (
            <span>{courseCount} Courses</span>
          )}

          {professorCountLoading ? (
            <Skeleton className="absolute right-0" width={100} />
          ) : (
            <span className="absolute right-0">
              {professorCount} Professors
            </span>
          )}
        </div>
      </div>
      <div className="flex">
        {userCountLoading ? (
          <Skeleton width={100} />
        ) : (
          <span>{userCount} Students on Studyflow</span>
        )}

        {flowCountLoading ? (
          <Skeleton className="absolute right-0" width={100} />
        ) : (
          <span className="absolute right-0">{flowCount} Flows</span>
        )}
      </div>
    </div>
  )
}
