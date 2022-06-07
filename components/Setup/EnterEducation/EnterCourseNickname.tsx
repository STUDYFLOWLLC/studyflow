import classnames from 'classnames'
import { useTheme } from 'next-themes'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface Props {
  nickname: string
  setNickname: Dispatch<SetStateAction<string>>
}

export default function EnterCourseNickname({ nickname, setNickname }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <input
      className={classnames(
        { 'border-gray-300': theme === 'light' },
        { 'bg-base-100': theme === 'dark' },
        'w-full sm:w-2/3 mx-auto text-center outline-none focus:outline-none focus:border-0 focus:ring-0 border-0 rounded-md text-md',
      )}
      onChange={(e: { target: { value: string } }) => {
        setNickname(e.target.value)
      }}
      value={nickname}
      placeholder="Course Nickname (optional)"
      autoFocus
    />
  )
}
