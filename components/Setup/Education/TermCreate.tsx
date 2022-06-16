import { School, TermType } from '@prisma/client'
import { User } from '@supabase/supabase-js'
import classNames from 'classnames'
import SelectTermType from 'components/Setup/Education/SelectTermType'
import ButtonSpinner from 'components/spinners/ButtonSpinner'
import createTerm from 'hooks/school/createTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

interface Props {
  user: User
  selectedSchool: School
}

export default function TermCreate({ user, selectedSchool }: Props) {
  const { userDetails, mutateUserDetails } = useUserDetails(user.id)
  const [focused, setFocused] = useState(false)
  const [creating, setCreating] = useState(false)
  const [termTypeNative, setTermTypeNative] = useState<TermType>(
    selectedSchool.TermType || TermType.SEMESTER,
  )
  const [termName, setTermName] = useState('Fall 2022')

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

  return (
    <div className="w-full mt-2">
      <p className="w-full text-left text-lg font-medium">Create a Term</p>
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
          <div>
            <input
              className="mt-1 bg-transparent text-center outline-none focus:outline-none focus:border-0 focus:ring-0 border-0  h-full w-full rounded-md text-lg"
              onChange={(e: { target: { value: string } }) => {
                setTermName(e.target.value)
              }}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              value={termName}
              autoFocus
            />
            <div
              className={classNames(
                { 'w-4/5': focused },
                { 'w-1/3': !focused },
                'transition-all h-0.5 bg-primary mx-auto',
              )}
            />
          </div>

          <button
            type="button"
            className="btn btn-sm btn-primary mt-4 w-4/5 mx-auto"
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
