import { Combobox } from '@headlessui/react'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import algoliasearch from 'algoliasearch/lite'
import classNames from 'classnames'
import MainSpinner from 'components/spinners/MainSpinner'
import usePrivateGroupDetails from 'hooks/social/usePrivateGroupDetails'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SpinnerSizes } from 'types/Loading'
import { addUserToGroup } from 'utils/social/groupHandlers'
import ShowGroup from './Group/ShowGroup'
import UserEntry from './UserEntry'
import UserInput from './UserInput'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY || '',
)
const index = searchClient.initIndex('students')

export interface UserHit {
  CreatedTime: string
  FK_SchoolID: number
  objectID: string
  Name: string
  Username: string
  ProfilePictureLink: string
  UserID: number
  school: string
}

export default function InputPrivateGroup() {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { privateGroupDetails, mutatePrivateGroupDetails } =
    usePrivateGroupDetails(userDetails?.UserID)

  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selectedUser, setSelectedUser] = useState<UserHit | null>(null)
  const [hits, setHits] = useState<UserHit[]>([])
  const [query, setQuery] = useState('')

  const filterUsers = async () => {
    const result = await index.search(query)
    const hitsTemp = result.hits as UserHit[]
    setHits(hitsTemp)
  }

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    filterUsers()
  }, [query])

  if (!mounted) return null

  return (
    <div className="py-4 sm:py-5 prose w-full text-center flex flex-col items-center">
      <h3 className="text-sm text-info font-medium">Your Private Group</h3>
      <p className="text-xs">Choose who can see your private flows. </p>
      <ShowGroup />
      {loading && <MainSpinner size={SpinnerSizes.medium} />}
      <Combobox
        as="div"
        value={selectedUser}
        disabled={loading}
        onChange={(newUser: UserHit) =>
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
            {hits.slice(0, 5).map((user: UserHit) => (
              <UserEntry key={user.objectID} userHit={user} />
              // <SchoolEntry key={school.SchoolID} school={school} />
            ))}
          </Combobox.Options>
        )}
      </Combobox>
    </div>
  )
}
