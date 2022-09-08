import { UserIcon } from '@heroicons/react/24/outline'
import algoliasearch from 'algoliasearch/lite'
import { UserHit } from 'components/Social/Friends/StudentSearcher'
import { NextRouter } from 'next/router'
import { ActionType, QuickAction } from 'types/CMDPalette'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY || '',
)
const index = searchClient.initIndex('students')

export default async function buildUserActions(query: string) {
  const result = await index.search(query)
  const hits = result.hits.slice(0, 5) as UserHit[]
  const actions = hits
    .filter((hit) => hit.Username)
    .map((hit) => ({
      name: `${hit.Name} @${hit.Username}`,
      CmdIcon: UserIcon,
      shortcut: '',
      actionType: ActionType.STUDENT,
      action: (router: NextRouter) => router.push(`/student/${hit.Username}`),
    })) as QuickAction[]

  return actions
}
