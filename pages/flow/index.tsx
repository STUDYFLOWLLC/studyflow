// should get flow from server side and render it here

import { CalendarIcon, EyeIcon, FolderOpenIcon } from '@heroicons/react/outline'
import { User, withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import classNames from 'classnames'
import FlowPage from 'components/Flow/FlowPage'
import FlowProperty from 'components/Flow/FlowProperty'
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
    <div className="w-screen">
      <div className="flex absolute top-2 right-4">
        <EyeIcon className="w-4" />
        <p className="text-gray-400 ml-2">178</p>
      </div>
      <div className="mx-32 mt-32">
        <div className="prose">
          <div className="flex items-baseline">
            <ContentEditable
              tagName="h1"
              className="font-medium m-0 p-0 outline-0"
              onChange={(e: ContentEditableEvent) => setTitle(e.target.value)}
              html={title}
            />
            <h3
              className={classNames(
                { 'text-stone-500': theme === 'light' },
                { 'text-gray-400': theme === 'dark' },
                'font-light m-0 p-0 ml-3',
              )}
            >
              {flowy.Type}
            </h3>
          </div>

          <div className="border-l-2 ml-1 mt-4 p-0 mb-2">
            <FlowProperty
              Icon={CalendarIcon}
              property="Date"
              value={handleTimeStamp(flowy.CreatedTime)}
            />
            <FlowProperty
              Icon={FolderOpenIcon}
              property="Course"
              value={flowy.FK_CourseOnTerm.Nickname}
              coursesOnTerm={coursesOnTerm}
              loading={coursesOnTermLoading}
            />
          </div>
        </div>
        <div className="divider" />
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
