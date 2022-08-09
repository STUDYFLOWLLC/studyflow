/* eslint-disable import/prefer-default-export */

import { MyValue } from 'dinnerplate/types/plateTypes'
import makeBugReport from 'hooks/beta/makeBugReport'
import toast from 'react-hot-toast'
import { KeyedMutator } from 'swr'
import makeFeatureRequest from './makeFeatureRequest'
import { BugReport } from './useBugReports'
import { FeatureRequest } from './useFeatureRequests'

export async function createBugReport(
  value: MyValue,
  bugReports: BugReport[],
  mutateBugReports: KeyedMutator<any>,
  setSubmitting: (submitting: boolean) => void,
  setShowReport: (showBugReport: boolean) => void,
  username?: string,
) {
  setSubmitting(true)
  // mutate in backend
  const data = await makeBugReport(value, username)

  // mutate locally
  mutateBugReports(
    {
      mutate: true,
      newBugReports: [data, ...bugReports],
    },
    {
      revalidate: false,
    },
  )

  setSubmitting(false)
  setShowReport(false)
  toast.success(
    'Bug report submitted! Thanks for making Studyflow a beter place to learn!',
  )
}

export async function createFeatureRequest(
  value: MyValue,
  featureRequests: FeatureRequest[],
  mutateFeatureRequests: KeyedMutator<any>,
  setSubmitting: (submitting: boolean) => void,
  setShowRequest: (showFeatureRequest: boolean) => void,
  username?: string,
) {
  setSubmitting(true)
  // mutate in backend
  const data = await makeFeatureRequest(value, username)

  // mutate locally
  mutateFeatureRequests(
    {
      mutate: true,
      newFeatureRequests: [data, ...featureRequests],
    },
    {
      revalidate: false,
    },
  )

  setSubmitting(false)
  setShowRequest(false)
  toast.success(
    'Feature request submitted! Thanks for making Studyflow a beter place to learn!',
  )
}
