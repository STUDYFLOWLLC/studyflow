/* eslint-disable react/display-name */
import { useUser } from '@supabase/supabase-auth-helpers/react'
import AddFlashcard from 'components/Repetition/Flashcards/Enter/AddFlashcard'
import EnterFlashcard from 'components/Repetition/Flashcards/Enter/EnterFlashcard'
import useFlashcardStack from 'hooks/repetition/useFlashcardStack'
import useUserDetails from 'hooks/useUserDetails'
import { forwardRef, LegacyRef } from 'react'
import FlipMove from 'react-flip-move'
import { Flashcard } from 'types/Repetition'

interface Props {
  flashcardStackId: string
}

const FunctionalFlashcard = forwardRef(
  (
    props: { flashcard: Flashcard; flashcardId: string },
    ref: LegacyRef<HTMLDivElement>,
  ) => (
    <div ref={ref}>
      <EnterFlashcard
        key={props.flashcard.FlashcardID}
        flashcard={props.flashcard}
        flashcardStackId={props.flashcardId}
      />
    </div>
  ),
)

export default function EnterFlashcardStack({ flashcardStackId }: Props) {
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { flashcardStack, mutateFlashcardStack } =
    useFlashcardStack(flashcardStackId)

  return (
    <div>
      {/* @ts-expect-error this is a little outdated */}
      <FlipMove duration={200}>
        {flashcardStack?.FK_Flashcards.map((flashcard) => (
          <FunctionalFlashcard
            key={flashcard.FlashcardID}
            flashcard={flashcard}
            flashcardId={flashcardStackId}
          />
        ))}
      </FlipMove>
      <AddFlashcard flashcardStackId={flashcardStackId} />
    </div>
  )
}
