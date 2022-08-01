import { PencilAltIcon, RefreshIcon } from '@heroicons/react/outline'
import MainSpinner from 'components/spinners/MainSpinner'
import useFlashcardStack from 'hooks/repetition/useFlashcardStack'
import EnterFlashcardStack from './Enter/EnterFlashcardStack'
import FlashcardStack from './FlashcardStack'

interface Props {
  flashcardStackId: string
  setEditing: (editing: string) => void
  reviewing: boolean
  setReviewing: (reviewing: boolean) => void
}

export default function MainFlashcard({
  flashcardStackId,
  setEditing,
  reviewing,
  setReviewing,
}: Props) {
  const { flashcardStack, flashcardStackLoading } =
    useFlashcardStack(flashcardStackId)

  return (
    <div>
      {flashcardStackLoading ? (
        <div className="flex items-center flex-col mt-36">
          <MainSpinner />
        </div>
      ) : (
        <div>
          <div className="absolute top-4 right-3 transition-all">
            {reviewing ? (
              <PencilAltIcon
                className="w-5 h-5 cursor-pointer"
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
                className="w-5 h-5 cursor-pointer"
                onClick={() => {
                  setReviewing(true)
                }}
                onKeyDown={() => {
                  setReviewing(true)
                }}
              />
            )}
          </div>
          <h2 className="m-0 p-2 pb-0">
            {flashcardStack?.Title || 'Untitled'}
          </h2>
          {flashcardStack?.Description && (
            <p className="m-0 px-2 py-0">{flashcardStack.Description}</p>
          )}
          {reviewing ? (
            <div className="mt-4 transition-all">
              <FlashcardStack cards={flashcardStack?.FK_Flashcards || []} />
            </div>
          ) : (
            <EnterFlashcardStack flashcardStackId={flashcardStackId} />
          )}
        </div>
      )}
    </div>
  )
}
