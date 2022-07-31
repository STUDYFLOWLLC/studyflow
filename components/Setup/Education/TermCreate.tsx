import { School, TermType } from '@prisma/client'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import SelectTermType from 'components/Setup/Education/SelectTermType'
import ButtonSpinner from 'components/spinners/ButtonSpinner'
import createTerm from 'hooks/school/createTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import getTermNameFromTermType from 'utils/getTermNameFromTermType'

interface Props {
  selectedSchool: School
}

export default function TermCreate({ selectedSchool }: Props) {
  const { user } = useUser()
  const { userDetails, userDetailsLoading, mutateUserDetails } = useUserDetails(
    user?.id,
  )
  const [autocreate, setAutocreate] = useState(false)
  const [creating, setCreating] = useState(false)
  const [termTypeNative, setTermTypeNative] = useState<TermType>(
    selectedSchool.TermType || TermType.SEMESTER,
  )

  const createTermNative = async () => {
    if (!termTypeNative || creating) return
    setCreating(true)
    const data = await createTerm(
      termTypeNative,
      getTermNameFromTermType(termTypeNative),
      user?.email || '',
      userDetails?.FK_SchoolID || selectedSchool.SchoolID,
    )
    if (data.createTerm.TermID) {
      mutateUserDetails({ ...userDetails, FK_Terms: [{}] })
      toast.success('Term Created!')
      setCreating(false)
    }
  }

  useEffect(() => {
    if (selectedSchool.TermType && userDetails) {
      createTermNative()
    }
  }, [userDetailsLoading])

  return (
    <div className="w-full mt-2">
      <p className="w-full text-left text-lg font-medium">Create a Term</p>
      <div className="pl-2 w-full flex flex-col">
        <div className="w-full flex flex-col">
          {autocreate ? (
            <p>
              Automatically creating your term because {selectedSchool.Name} is
              supported by Studyflow.{' '}
            </p>
          ) : (
            <SelectTermType
              termTypeNative={termTypeNative}
              setTermTypeNative={setTermTypeNative}
            />
          )}
          <button
            type="button"
            className="bg-primary w-4/5 mx-auto text-gray-700 mt-4 inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            onClick={() => createTermNative()}
            disabled={creating}
          >
            Create Term
            <ButtonSpinner show={creating} />
          </button>
        </div>
      </div>
    </div>
  )
}
