import CourseDropDown from 'components/dropdowns/CourseDropdown'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import { SVGProps } from 'react'

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  property: string
  value: string
  coursesOnTerm?: CourseOnTerm[]
  loading?: boolean
}

export default function FlowProperty({
  Icon,
  property,
  value,
  coursesOnTerm,
  loading,
}: Props) {
  return (
    <div className="flex align-middle pl-3">
      <Icon className="w-5" />
      <p className="w-24 pl-1 pr-6 py-0 my-0">{property}</p>
      <p className="pl-1 pr-6 py-0 my-0">
        {property !== 'Course' ? (
          <span>{value}</span>
        ) : (
          <CourseDropDown
            title="Course"
            items={
              coursesOnTerm
                ? coursesOnTerm.map((course) => ({
                    color: course.Color,
                    name: course.Nickname || course.FK_Course.Code,
                    handler: () => console.log('test'),
                  }))
                : []
            }
            loading={loading || false}
          />
        )}
      </p>
    </div>
  )
}
