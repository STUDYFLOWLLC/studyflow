import { KeyedMutator } from 'swr'
import { mutateViewFlow } from './mutateFlowView'

export default function viewFlow(
  flowId: string,
  flowViews: number,
  mutateFlowViews: KeyedMutator<any>,
  userId?: number,
) {
  // mutate in backend
  mutateViewFlow(flowId, userId)

  // mutate in frontend
  mutateFlowViews(
    {
      newViews: flowViews + 1,
      mutate: true,
    },
    {
      revalidate: false,
    },
  )
}
