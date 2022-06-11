import { NextRouter } from 'next/router'
import { SetupSteps } from 'types/SetupSteps'

export default function redirectHandler(
  router: NextRouter,
  loading: boolean,
  step: SetupSteps | undefined,
) {
  if (!loading && step === SetupSteps.PROFILE) router.push('/setup/profile')

  if (!loading && step === SetupSteps.EDUCATION) router.push('/setup/education')

  if (!loading && step === SetupSteps.COMMUNITY) router.push('/setup/community')

  if (!loading && step === SetupSteps.COMPLETE) router.push('/dash')
}
