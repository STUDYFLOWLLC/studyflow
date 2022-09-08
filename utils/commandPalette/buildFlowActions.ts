import { FolderOpenIcon } from '@heroicons/react/24/outline'
import algoliasearch from 'algoliasearch/lite'
import { NextRouter } from 'next/router'
import { ActionType, FlowHit, QuickAction } from 'types/CMDPalette'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY || '',
)
const index = searchClient.initIndex('flows')

export default async function buildUserActions(query: string) {
  const result = await index.search(query)
  const hits = result.hits.slice(0, 5) as unknown as FlowHit[]
  const actions = hits
    .filter((hit) => hit.Title !== 'Untitled')
    .map((hit) => ({
      name: `${hit.Title}`,
      CmdIcon: FolderOpenIcon,
      shortcut: '',
      actionType: ActionType.FLOW,
      action: (router: NextRouter) => router.push(`/flow/${hit.FlowID}`),
    })) as QuickAction[]

  return actions
}
