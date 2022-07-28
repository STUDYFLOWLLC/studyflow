import { Combobox } from '@headlessui/react'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import algoliasearch from 'algoliasearch/lite'
import classNames from 'classnames'
import { UserHit } from 'components/Settings/Sharing/InputPrivateGroup'
import UserInput from 'components/Settings/Sharing/UserInput'
import useFriends from 'hooks/social/useFriends'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import BasicStudentDisplay from '../Displays/BasicStudentDisplay'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY || '',
)
const index = searchClient.initIndex('students')

export default function FriendsSearcher() {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails, userDetailsLoading } = useUserDetails(user?.id)
  const { friends, friendsLoading } = useFriends(userDetails?.UserID)

  const [excludedUserIDs, setExcludedUsersIDs] = useState<number[]>([])
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')
  const [hits, setHits] = useState<UserHit[]>([])
  const [selectedUser, setSelectedUser] = useState<UserHit | null>(null)

  const filterUsers = async () => {
    const result = await index.search(query)
    const hitsTemp = result.hits as UserHit[]
    // users you are friends with, have send requests to, or have received requests from, or yourself
    const excluded = (
      friends?.accepted.map((f) =>
        f.FK_UserFrom.UserID === userDetails?.UserID
          ? f.FK_UserTo.UserID
          : f.FK_UserFrom.UserID,
      ) || []
    )
      .concat(
        (friends?.incoming.map((f) => f.FK_UserFrom.UserID) || []).concat(
          friends?.requested.map((f) => f.FK_UserTo.UserID) || [],
        ),
      )
      .concat([userDetails?.UserID || 0])
    setHits(hitsTemp.filter((h) => !excluded.includes(h.UserID)))
  }

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    filterUsers()
  }, [query])

  if (!mounted) return null

  return (
    <div className="py-4 sm:py-5 prose w-full text-center flex flex-col items-center">
      <Combobox
        as="div"
        value={selectedUser}
        disabled={loading}
        onChange={(newUser: UserHit) =>
          // addUserToGroup(
          //   userDetails?.UserID,
          //   newUser,
          //   privateGroupDetails,
          //   mutatePrivateGroupDetails,
          //   setLoading,
          // )
          console.log('test')
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
            {hits.slice(0, 5).map((user: UserHit) => (
              <div
                key={user.UserID}
                className={classNames(
                  { 'hover:bg-gray-100': theme === 'light' },
                  { 'hover:bg-slate-600': theme === 'dark' },
                  'p-2 cursor-pointer',
                )}
              >
                <BasicStudentDisplay
                  publicUser={{
                    UserID: user.UserID,
                    ProfilePictureLink: user.ProfilePictureLink,
                    Name: user.Name,
                    Username: user.Username,
                    FK_School: {
                      Name: user.school,
                    },
                  }}
                />
              </div>
            ))}
          </Combobox.Options>
        )}
      </Combobox>
    </div>
  )
}
