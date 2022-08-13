import { PencilAltIcon, RefreshIcon } from '@heroicons/react/outline'
import MainSpinner from 'components/spinners/MainSpinner'
import useFlowDetails from 'hooks/flows/useFlowDetails'
import useFlashcardStack from 'hooks/repetition/useFlashcardStack'
import useRepetitionDetails from 'hooks/repetition/useRepetitionDetails'
import { useState } from 'react'
import { mutate } from 'swr'
import { SpinnerSizes } from 'types/Loading'
import EnterFlashcardStack from './Enter/EnterFlashcardStack'
import EnterTitle from './Enter/EnterTitle'
import FlashcardStack from './FlashcardStack'

interface Props {
  flowId: string
  repetitionId?: string
  flashcardStackId: string
  setEditing: (editing: string) => void
  reviewing: boolean
  setReviewing: (reviewing: boolean) => void
}

export default function MainFlashcard({
  flowId,
  repetitionId,
  flashcardStackId,
  setEditing,
  reviewing,
  setReviewing,
}: Props) {
  const { repetitionDetails, mutateRepetitionDetails } =
    useRepetitionDetails(repetitionId)
  const { flashcardStack, flashcardStackLoading, mutateFlashcardStack } =
    useFlashcardStack(flashcardStackId)
  const { flowDetails, mutateFlowDetails } = useFlowDetails(flowId)

  const [saving, setSaving] = useState(false)

  return (
    <div>
      {flashcardStackLoading ? (
        <div className="flex items-center flex-col mt-36">
          <MainSpinner />
        </div>
      ) : (
        <div>
          <div className="absolute flex items-center top-4 right-3 transition-all">
            {saving && <MainSpinner size={SpinnerSizes.small} />}
            {reviewing ? (
              <PencilAltIcon
                className="ml-2 z-40 w-5 h-5 cursor-pointer"
                onClick={() => {
                  setReviewing(false)
                  setEditing(flashcardStackId)
                }}
                onKeyDown={() => {
                  setReviewing(false)
                  setEditing(flashcardStackId)
                }}
              />
            ) : (
              <RefreshIcon
                className="ml-2 z-40 w-5 h-5 cursor-pointer"
                onClick={() => {
                  setReviewing(true)
                }}
                onKeyDown={() => {
                  setReviewing(true)
                }}
              />
            )}
          </div>
          <EnterTitle
            flowDetails={flowDetails}
            mutateFlowDetails={mutateFlowDetails}
            flashcardStack={flashcardStack}
            mutateFlashcardStack={mutate}
            setSaving={setSaving}
            disabled={reviewing}
          />
          {flashcardStack?.Description && (
            <p className="m-0 px-2 py-0">{flashcardStack.Description}</p>
          )}
          {reviewing ? (
            <div className="mt-4 transition-all">
              <FlashcardStack
                cards={flashcardStack?.FK_Flashcards || []}
                repetitionId={repetitionId}
              />
            </div>
          ) : (
            <EnterFlashcardStack flashcardStackId={flashcardStackId} />
          )}
        </div>
      )}
    </div>
  )
}
