/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */

import { mutateTermName, mutateTermType } from 'hooks/school/mutateTerm'
import { UserDetail } from 'hooks/useUserDetails'
import { KeyedMutator } from 'swr'
import { TermType } from 'types/School'

export function changeTermType(
  termId: number | undefined,
  newType: TermType,
  userDetails: UserDetail | null,
  mutateUserDetails: KeyedMutator<any>,
) {
  if (termId === undefined) return
  // mutate in backend
  mutateTermType(termId, newType)

  // change locally
  mutateUserDetails(
    {
      ...userDetails,
      FK_Terms: userDetails?.FK_Terms?.map((term) => {
        if (termId === term.TermID) {
          return {
            ...term,
            TermType: newType,
          }
        }
        return term
      }),
      mutate: true,
    },
    {
      revalidate: false,
    },
  )
}

export async function changeTermName(
  termId: number | undefined,
  newName: string,
  userDetails: UserDetail | null,
  mutateUserDetails: KeyedMutator<any>,
  setSaving: (saving: boolean) => void,
) {
  if (termId === undefined) return

  setSaving(true)

  // mutate locally
  mutateUserDetails(
    {
      ...userDetails,
      FK_Terms: userDetails?.FK_Terms?.map((term) => {
        if (termId === term.TermID) {
          return {
            ...term,
            TermName: newName,
          }
        }
        return term
      }),
      mutate: true,
    },
    {
      revalidate: false,
    },
  )

  // change locally
  const data = await mutateTermName(termId, newName)
  if (data) setSaving(false)
}
