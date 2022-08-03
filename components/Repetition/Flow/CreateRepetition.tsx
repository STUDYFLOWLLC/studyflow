import Tippy from '@tippyjs/react'
import MainSpinner from 'components/spinners/MainSpinner'
import useFlowDetails from 'hooks/flows/useFlowDetails'
import { createRepetition } from 'hooks/repetition/repetitionHandlers'
import useRepetitionDetails from 'hooks/repetition/useRepetitionDetails'
import { useState } from 'react'
import { SpinnerSizes } from 'types/Loading'
import { RepetitionType } from 'types/Repetition'

interface Props {
  flowId: string
  currentRepetition: string | null
  setCurrentRepetition: (currentRepetition: string | null) => void
}

export default function CreateRepetition({
  flowId,
  currentRepetition,
  setCurrentRepetition,
}: Props) {
  const { flowDetails, mutateFlowDetails } = useFlowDetails(flowId)
  const { mutateRepetitionDetails } = useRepetitionDetails(currentRepetition)

  const [creating, setCreating] = useState(false)
  const [creatingType, setCreatingType] = useState<RepetitionType | null>(null)

  return (
    <div className="prose mx-auto max-w-none w-full px-2">
      <h3>Create a repetition</h3>
      <p className="mb-0">
        Based on the science of{' '}
        <a
          href="https://en.wikipedia.org/wiki/Spaced_repetition"
          target="_blank"
          rel="noreferrer"
          className="no-underline text-primary/80"
        >
          spaced repetition
        </a>
        , a Studyflow repetition is a simple and time-efficient way to memorize
        anything. By spacing out your review, you spend less time studying and
        end up learning more. The greatest part: Studyflow does all the planning
        for you. You just have to show up and review your flashcards. A
        repetition contains:
      </p>
      <ul>
        <li>A flashcard stack.</li>
        <li>A set of review tasks.</li>
      </ul>
      <h3 className="mt-4">Choose your intensity</h3>
      <p>
        Have a test coming soon or studying difficult content? Increase the
        amount of repetitions and decrease the space between them.
      </p>
      <div className="mt-14 flex flex-wrap justify-center lg:justify-between items-center">
        <Tippy
          content="A test coming soon"
          showOnCreate
          hideOnClick={false}
          trigger="manual"
        >
          <button
            disabled={creating}
            type="button"
            className="w-48 h-14 mb-12 lg:mb-2 alex-button bg-rose-300 flex flex-col items-center"
          >
            <p className="m-0 p-0">4/10</p>
            <p className="m-0 p-0">4 repetitions in 10 days</p>
          </button>
        </Tippy>
        <Tippy
          content="Recommended"
          showOnCreate
          hideOnClick={false}
          trigger="manual"
        >
          <button
            disabled={creating}
            type="button"
            className="w-48 h-14 mb-12 lg:mb-2 alex-button bg-primary/80 flex flex-col items-center"
            onClick={async () =>
              createRepetition(
                flowId,
                flowDetails?.Title,
                RepetitionType.FOURTHIRTY,
                mutateRepetitionDetails,
                setCreating,
                setCreatingType,
                setCurrentRepetition,
              )
            }
          >
            {creatingType === RepetitionType.FOURTHIRTY ? (
              <MainSpinner size={SpinnerSizes.medium} />
            ) : (
              <>
                <p className="m-0 p-0">4/30</p>
                <p className="m-0 p-0">4 repetitions in 30 days</p>
              </>
            )}
          </button>
        </Tippy>
        <Tippy
          content="Difficult content"
          showOnCreate
          hideOnClick={false}
          trigger="manual"
        >
          <button
            disabled={creating}
            type="button"
            className="w-48 h-14 mb-12 lg:mb-2 alex-button bg-amber-300 flex flex-col items-center"
          >
            <p className="m-0 p-0">6/30</p>
            <p className="m-0 p-0">6 repetitions in 30 days</p>
          </button>
        </Tippy>
      </div>
    </div>
  )
}
