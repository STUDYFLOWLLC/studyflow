import { School, TermType } from '@prisma/client'
import { User } from '@supabase/supabase-js'
import classNames from 'classnames'
import SelectTermType from 'components/Setup/Education/SelectTermType'
import ButtonSpinner from 'components/spinners/ButtonSpinner'
import createTerm from 'hooks/school/createTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

interface Props {
  user: User
  selectedSchool: School
}

export default function TermCreate({ user, selectedSchool }: Props) {
  const { theme } = useTheme()

  const { userDetails, mutateUserDetails } = useUserDetails(user.id)
  const [mounted, setMounted] = useState(false)
  const [creating, setCreating] = useState(false)
  const [termTypeNative, setTermTypeNative] = useState<TermType>(
    selectedSchool.TermType || TermType.SEMESTER,
  )
  const [termName, setTermName] = useState('Fall 2022')

  useEffect(() => setMounted(true), [])

  const createTermNative = async () => {
    if (!termName || !termTypeNative || creating) return
    setCreating(true)
    const data = await createTerm(
      termTypeNative,
      termName,
      user.email || '',
      userDetails?.FK_SchoolID || selectedSchool.SchoolID,
    )
    if (data.createTerm.TermID) {
      mutateUserDetails({ ...userDetails, FK_Terms: [{}] })
      toast.success('Term Created!')
      setCreating(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="w-full pl-2 mt-2">
      <p className="w-full text-left text-lg">1. Create a term</p>
      <div className="pl-2 w-full flex flex-col">
        <div className="w-full flex flex-col">
          <Toaster position="top-center" />
          <SelectTermType
            termTypeNative={termTypeNative}
            setTermTypeNative={setTermTypeNative}
          />
          <p className="mt-2">
            Term name <span className="text-red-400">*</span>
          </p>
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
            autoFocus
          />
          <button
            type="button"
            className="btn btn-sm btn-primary mt-4"
            onClick={() => createTermNative()}
          >
            Create Term
            <ButtonSpinner show={creating} />
          </button>
        </div>
      </div>
    </div>
  )
}
