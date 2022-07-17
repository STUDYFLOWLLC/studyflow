import { useUser } from '@supabase/supabase-auth-helpers/react'
import useUserDetails from 'hooks/useUserDetails'
import DeleteFlow from './DeleteFlow'
import TrashedFlowOptions from './RestoreFlow'

interface Props {
  flowId: string
  closeModal: () => void
}

export default function TrashedFlow({ flowId, closeModal }: Props) {
  const { user } = useUser()
  const { userDetails, userDetailsLoading } = useUserDetails(user?.id)

  return (
    <div className="pl-2 pr-4 text-sm flex items-center prose mx-auto mt-24">
      <div className="px-2 py-2">
        <h1 className="font-medium">
          Restore to greatness or delete for eternity?
        </h1>
        <h3 className="text-info font-normal">
          Restoring a flow will bring back it back to where it belongs. Deleting
          it will delete it. For real this time.
        </h3>
        <div className="mt-5">
          <TrashedFlowOptions flowId={flowId} closeModal={closeModal} />
          <DeleteFlow flowId={flowId} closeModal={closeModal} />
        </div>
      </div>
    </div>
  )
}
