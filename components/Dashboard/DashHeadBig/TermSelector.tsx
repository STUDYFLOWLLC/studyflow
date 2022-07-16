import { useUser } from '@supabase/supabase-auth-helpers/react'
import useUserDetails, { SmallTerm } from 'hooks/useUserDetails'
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import EditTermModal from './EditTermModal'
import TermSelectorMenu from './TermSelectorMenu'

export default function TermSelector() {
  const { user } = useUser()
  const { userDetails, userDetailsLoading } = useUserDetails(user?.id)

  const [mounted, setMounted] = useState(false)
  const [editing, setEditing] = useState(false)
  const [selectedTerm, setSelectedTerm] = useState<SmallTerm | undefined>(
    userDetails?.FK_Terms?.[0],
  )

  useEffect(() => setMounted(true), [])

  useEffect(() => setSelectedTerm(userDetails?.FK_Terms?.[0]), [userDetails])

  if (!mounted) return null

  if (userDetailsLoading) return <Skeleton className="mr-3 p-0 w-36 h-8" />

  return (
    <>
      <TermSelectorMenu
        setEditing={setEditing}
        selectedTerm={selectedTerm}
        setSelectedTerm={setSelectedTerm}
      />
      <EditTermModal open={editing} setOpen={setEditing} term={selectedTerm} />
    </>
  )
}
