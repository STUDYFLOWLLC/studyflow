import { PlusCircleIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const FC1 = {
  CourseOnTermID: 0,
  Color: 'bg-rose-400',
  Nickname: 'Welcome',
  Index: 0,
  FK_Course: {
    Code: 'WLCM',
    Term: 'Next Term',
    Title: 'Welcome',
    FK_Professor: {
      Name: 'Welcome',
      Email: 'Welcome',
    },
  },
}
const FC2 = {
  CourseOnTermID: 0,
  Color: 'bg-sky-500',
  Nickname: 'To Studyflow',
  Index: 0,
  FK_Course: {
    Code: 'SFLW',
    Term: 'Next Term',
    Title: 'To Studyflow',
    FK_Professor: {
      Name: 'To Studyflow',
      Email: 'To Studyflow',
    },
  },
}
const FC3 = {
  CourseOnTermID: 0,
  Color: 'bg-green-400',
  Nickname: 'Ur Awesome',
  Index: 0,
  FK_Course: {
    Code: 'AWSM',
    Term: 'Next Term',
    Title: 'Ur Awesom',
    FK_Professor: {
      Name: 'Ur Awesom',
      Email: 'Ur Awesom',
    },
  },
}

const fakeCourses: CourseOnTerm[] = [FC1, FC2, FC3]

export default function FakeCourseNavs() {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="mt-6">
      <div className="w-100 flex items-center justify-between">
        <div>
          <p className="px-2 text-xs font-semibold text-gray-500 tracking-wider">
            Courses
          </p>
        </div>
        <PlusCircleIcon
          className="text-gray-500 cursor-pointer"
          style={{ width: '1.125rem' }}
        />
      </div>

      <div className="mt-1 space-y-1 w-full">
        <div
          className={classNames(
            {
              'text-gray-700 hover:text-gray-900 hover:bg-gray-50':
                theme === 'light',
            },
            { 'hover:bg-slate-700': theme === 'dark' },
            'group flex flex-col w-full items-center justify-between px-2 py-1 text-sm font-medium rounded-md cursor-pointer',
          )}
        >
          {fakeCourses.map((course, index) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className="flex w-full self-center items-center py-1"
              style={{ marginLeft: '0.15rem' }}
            >
              <span
                className={classNames(
                  course.Color,
                  'w-2.5 h-2.5 mr-4 mt-0.5 rounded-full',
                )}
                style={{ marginRight: '1.125rem' }}
              />
              <span>{course.Nickname || course.FK_Course.Code}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
