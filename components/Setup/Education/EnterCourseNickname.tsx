import classNames from 'classnames'
import { Dispatch, SetStateAction, useState } from 'react'

interface Props {
  nickname: string
  setNickname: Dispatch<SetStateAction<string>>
}

export default function EnterCourseNickname({ nickname, setNickname }: Props) {
  const [focused, setFocused] = useState(false)

  return (
    <div className="w-full">
      <input
        className="mt-2 bg-transparent text-center outline-none focus:outline-none focus:border-0 focus:ring-0 border-0  h-full w-full rounded-md text-lg"
        onChange={(e: { target: { value: string } }) => {
          setNickname(e.target.value)
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={nickname}
        placeholder="Course Nickname (optional)"
        autoFocus
      />
      <div
        className={classNames(
          { 'w-4/5': focused },
          { 'w-1/3': !focused },
          'transition-all h-0.5 bg-primary mx-auto',
        )}
      />
    </div>
  )
}
