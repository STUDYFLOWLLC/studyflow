// should get flow from server side and render it here

import { CalendarIcon, EyeIcon } from '@heroicons/react/outline'
import { User, withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import FlowCourse from 'components/Flow/FlowCourse'
import FlowPage from 'components/Flow/FlowPage'
import FlowProperty from 'components/Flow/FlowProperty'
import FlowType from 'components/Flow/FlowType'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'
import { useHotkeys } from 'react-hotkeys-hook'
import handleTimeStamp from 'utils/handleTimeStamp'

interface Props {
  // flow?: FlowRet
  user: User
}

const flowy = {
  CreatedTime: '2022-06-16T18:31:36.566Z',
  FlowID: 'f16634c0-31d2-4c84-819f-77944941f603',
  Type: 'LECTURE',
  Title: 'Flow title',
  Body: 'Flow body',
  Visibility: 'PUBLIC',
  FK_CourseOnTerm: {
    Nickname: '3410',
  },
}

export default function Flow({ user }: Props) {
  const { theme, setTheme } = useTheme()
  const { userDetails, userDetailsLoading } = useUserDetails(user.id)
  const { coursesOnTerm, coursesOnTermLoading } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0]?.TermID,
  )

  const [mounted, setMounted] = useState(false)
  const [title, setTitle] = useState(flowy.Title)
  const [text, setText] = useState('')

  useEffect(() => setMounted(true), [])

  useHotkeys(
    'cmd+l, ctrl+l',
    (e) => {
      e.preventDefault()
      // eslint-disable-next-line no-unused-expressions
      theme === 'light' ? setTheme('dark') : setTheme('light')
    },
    {
      enableOnTags: ['INPUT', 'TEXTAREA', 'SELECT'],
    },
    [theme],
  )

  if (!mounted) return null

  return (
    <div className="overflow-x-none">
      <div className="flex absolute top-2 right-4">
        <EyeIcon className="w-4" />
        <p className="text-gray-400 ml-2">178</p>
      </div>
      <div className="mx-auto mt-32 max-w-3xl overflow-none mb-32">
        <div className="prose mx-12 border-b pb-4 mb-4">
          <div className="flex items-baseline">
            <ContentEditable
              tagName="h1"
              className="font-medium m-0 p-0 outline-0"
              onChange={(e: ContentEditableEvent) => setTitle(e.target.value)}
              html={title}
            />
            <FlowType type={flowy.Type} />
          </div>
          <div className="border-l-2 ml-1 mt-4 p-0 mb-2">
            <FlowProperty
              Icon={CalendarIcon}
              property="Date"
              value={handleTimeStamp(flowy.CreatedTime)}
            />
            <FlowCourse
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
              loading={coursesOnTermLoading}
            />
          </div>
        </div>
        <FlowPage />
      </div>
    </div>
  )
}

/*
export async function getServerSideProps(context: {
  query: { FlowID: string }
}) {
  const data = await getFlowDetails(context.query.FlowID)
  return { props: { flow: data } }
}

*/

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
