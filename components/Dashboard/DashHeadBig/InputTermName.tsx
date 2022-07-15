import { CheckIcon } from '@heroicons/react/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import MainSpinner from 'components/spinners/MainSpinner'
import { mutateTermName } from 'hooks/school/mutateTerm'
import useUserDetails, { SmallTerm } from 'hooks/useUserDetails'
import { useState } from 'react'
import { SpinnerSizes } from 'types/Loading'

interface Props {
  term: SmallTerm | undefined
}

export default function InputTermName({ term }: Props) {
  const { user } = useUser()
  const { userDetails, mutateUserDetails } = useUserDetails(user?.id)

  const [editingName, setEditingName] = useState(false)
  const [saving, setSaving] = useState(false)

  const changeTerm = async (newName: string) => {
    setSaving(true)

    // mutate locally
    mutateUserDetails(
      {
        ...userDetails,
        FK_Terms: userDetails?.FK_Terms?.map((termCurrent) => {
          if (term?.TermID === termCurrent.TermID) {
            return {
              ...term,
              TermName: newName,
            }
          }
          return termCurrent
        }),
        mutate: true,
      },
      {
        revalidate: false,
      },
    )

    // change locally
    const data = await mutateTermName(term?.TermID || 0, newName)
    if (data) setSaving(false)
  }

  return (
    <div className="mb-4">
      <div className="text-lg text-info font-medium">Name</div>
      <div className="mt-1 flex text-md sm:mt-0 sm:col-span-2">
        <div className="w-72 mx-auto relative">
          <input
            className="bg-transparent text-center first-line:outline-none focus:outline-none focus:border-0 focus:ring-0 border-0  h-full w-full rounded-md text-lg"
            defaultValue={term?.TermName}
            onChange={(e) => changeTerm(e.target.value)}
            onFocus={() => setEditingName(true)}
            onBlur={() => setEditingName(false)}
          />
          <div
            className={classNames(
              { 'w-4/5': editingName },
              { 'w-1/3': !editingName },
              'transition-all h-0.5 bg-primary mx-auto',
            )}
          />
          {editingName && (
            <div
              className={classNames(
                { 'top-0': !saving },
                { 'top-1 transition-none': saving },
                'transition-all duration-300 w-6 h-6 absolute right-6',
              )}
            >
              {saving ? (
                <MainSpinner size={SpinnerSizes.small} />
              ) : (
                <CheckIcon className="w-6 h-6 text-info" />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
