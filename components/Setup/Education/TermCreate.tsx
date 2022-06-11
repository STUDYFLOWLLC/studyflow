import { School, TermType } from '@prisma/client'
import { User } from '@supabase/supabase-js'
import classNames from 'classnames'
import SelectTermType from 'components/Setup/Education/SelectTermType'
import MainSpinner from 'components/spinners/MainSpinner'
import createTerm from 'hooks/school/createTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { SpinnerSizes } from 'types/Loading'

interface Props {
  user: User
  selectedSchool: School
  setHasCreatedTerm: (hasCreatedTerm: boolean) => void
}

export default function TermCreate({
  user,
  selectedSchool,
  setHasCreatedTerm,
}: Props) {
  const { theme } = useTheme()

  const { userDetails } = useUserDetails(user.id)
  const [mounted, setMounted] = useState(false)
  const [creating, setCreating] = useState(false)
  const [termTypeNative, setTermTypeNative] = useState<TermType>(
    selectedSchool.TermType || TermType.SEMESTER,
  )
  const [termName, setTermName] = useState('')

  useEffect(() => setMounted(true), [])

  const createTermNative = async () => {
    setCreating(true)
    const data = await createTerm(
      termTypeNative,
      termName,
      user.email || '',
      userDetails?.FK_SchoolID || selectedSchool.SchoolID,
    )
    if (data.createTerm.TermID) {
      toast.success('Term Created!')
      setCreating(false)
      setHasCreatedTerm(true)
    }
  }

  if (!mounted) return null

  return (
    <div className="pl-2 w-full flex flex-col">
      {creating ? (
        <div className="mx-auto">
          <MainSpinner size={SpinnerSizes.medium} />
        </div>
      ) : (
        <div className="w-full flex flex-col">
          <Toaster position="top-center" />
          <SelectTermType
            termTypeNative={termTypeNative}
            setTermTypeNative={setTermTypeNative}
          />
          <p>Term name</p>
          <p className="text-sm">Used to organize your dashboard. </p>
          <input
            className={classNames(
              { 'bg-base-100': theme === 'dark' },
              'shadow-md mx-auto w-3/4 text-center outline-none focus:outline-0 focus:ring-0 border-0 h-full rounded-md text-lg',
            )}
            onChange={(e: { target: { value: string } }) => {
              setTermName(e.target.value)
            }}
            value={termName}
            placeholder="Fall 2022"
            autoFocus
          />
          <button
            type="button"
            className="btn btn-sm btn-primary w-1/2 mx-auto mt-2"
            disabled={!termName || !termTypeNative}
            onClick={() => createTermNative()}
          >
            Create Term
          </button>
        </div>
      )}
    </div>
  )
}
