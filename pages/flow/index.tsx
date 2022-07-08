// should get flow from server side and render it here

import { User, withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'

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

  return <div>dep</div>
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
