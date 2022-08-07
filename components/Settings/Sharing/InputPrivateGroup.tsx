import { Combobox } from '@headlessui/react'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import Tippy from '@tippyjs/react'
import classNames from 'classnames'
import MainSpinner from 'components/spinners/MainSpinner'
import useFriends from 'hooks/social/useFriends'
import usePrivateGroupDetails from 'hooks/social/usePrivateGroupDetails'
import useUserDetails from 'hooks/useUserDetails'
import { matchSorter } from 'match-sorter'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SpinnerSizes } from 'types/Loading'
import { TOOLTIP_DELAY, TOOLTIP_OFFSET } from 'types/Magic'
import { PublicUser } from 'types/Social'
import { addUserToGroup } from 'utils/social/groupHandlers'
import ShowGroup from './Group/ShowGroup'
import UserEntry from './UserEntry'
import UserInput from './UserInput'

export default function InputPrivateGroup() {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { privateGroupDetails, mutatePrivateGroupDetails } =
    usePrivateGroupDetails(userDetails?.UserID)
  const { friends } = useFriends(userDetails?.UserID)

  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selectedUser, setSelectedUser] = useState<PublicUser | null>(null)
  const [hits, setHits] = useState<PublicUser[]>([])
  const [query, setQuery] = useState('')

  const filterUsers = async () => {
    const friendshipsToOther = friends?.accepted.map((f) =>
      f.FK_UserFrom.UserID === userDetails?.UserID
        ? f.FK_UserTo
        : f.FK_UserFrom,
    )
    const result = matchSorter(friendshipsToOther || [], query, {
      keys: ['Name'],
    })
    const excluded = privateGroupDetails?.FK_UserOnStudyGroup.map(
      (u) => u.FK_User.UserID,
    )
    setHits(result.filter((u) => !(excluded || []).includes(u.UserID)))
  }

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    filterUsers()
  }, [query])

  if (!mounted) return null

  return (
    <Tippy
      disabled={hits.length > 0}
      content="No friends yet! Visit social to add friends."
      offset={TOOLTIP_OFFSET}
      delay={TOOLTIP_DELAY}
    >
      <div className="py-4 sm:py-5 prose max-w-none text-center flex flex-col items-center">
        <h3 className="text-sm text-info font-medium">Your Private Group</h3>
        <p className="text-xs">Choose who can see your private flows. </p>
        <ShowGroup />
        {loading && <MainSpinner size={SpinnerSizes.medium} />}
        <Combobox
          as="div"
          value={selectedUser}
          disabled={loading}
          onChange={(newUser: PublicUser) =>
            addUserToGroup(
              userDetails?.UserID,
              newUser,
              privateGroupDetails,
              mutatePrivateGroupDetails,
              setLoading,
            )
          }
        >
          <UserInput query={query} setQuery={setQuery} />
          {hits.length > 0 && (
            <Combobox.Options
              className={classNames(
                {
                  'ring-1 ring-black ring-opacity-5': theme === 'light',
                },
                { 'bg-slate-700': theme === 'dark' },
                'm-0 p-0 list-none z-10 overflow-auto rounded-md shadow-lg focus:outline-none',
              )}
            >
              {hits.slice(0, 5).map((displayUser: PublicUser) => (
                <UserEntry key={displayUser.UserID} displayUser={displayUser} />
              ))}
            </Combobox.Options>
          )}
        </Combobox>
      </div>
    </Tippy>
  )
}
