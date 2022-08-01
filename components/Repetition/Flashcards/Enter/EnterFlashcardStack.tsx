import { useUser } from '@supabase/supabase-auth-helpers/react'
import EnterFlashcard from 'components/Repetition/Flashcards/Enter/EnterFlashcard'
import useFlashcardStack from 'hooks/repetition/useFlashcardStack'
import useUserDetails from 'hooks/useUserDetails'

interface Props {
  flashcardStackId: string
}

export default function EnterFlashcardStack({ flashcardStackId }: Props) {
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { flashcardStack, mutateFlashcardStack } =
    useFlashcardStack(flashcardStackId)

  return (
    <div>
      {flashcardStack?.FK_Flashcards.map((flashcard) => (
        <EnterFlashcard
          key={flashcard.FlashcardID}
          flashcard={flashcard}
          flashcardStackId={flashcardStackId}
        />
      ))}
    </div>
  )
}
