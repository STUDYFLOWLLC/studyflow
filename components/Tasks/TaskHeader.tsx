import { User } from '@supabase/supabase-auth-helpers/nextjs'
import classNames from 'classnames'
import useTermDetails from 'hooks/school/useTermDetails'
import useUserDetails from 'hooks/useUserDetails'

const options = ['Today', 'Upcoming', 'Classes']

interface Props {
  user: User
  viewing: string
  setViewing: (viewing: string) => void
}

export default function TaskHeader({ user, viewing, setViewing }: Props) {
  const { userDetails, userDetailsLoading } = useUserDetails(user.id)
  const { termDetails, termDetailsLoading } = useTermDetails(
    userDetails?.FK_Terms?.[0]?.TermID,
  )

  return (
    <div className="text-center mt-6">
      {options.map((option) => (
        <span
          className={classNames(
            { 'bg-primary/90 text-white': viewing === option },
            {
              'hover:bg-primary/50 hover:text-white': viewing !== option,
            },
            'cursor-pointer transition inline-block mx-2 px-2 py-0.5 rounded-md text-lg font-medium',
          )}
          key={option}
          onClick={() => setViewing(option)}
          onKeyDown={() => setViewing(option)}
        >
          {option}
        </span>
      ))}
    </div>
  )
}
