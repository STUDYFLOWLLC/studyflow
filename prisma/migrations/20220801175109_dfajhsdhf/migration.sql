-- AlterTable
ALTER TABLE "Flashcard" ADD COLUMN     "DeletedTime" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "FlashcardStack" ADD COLUMN     "DeletedTime" TIMESTAMP(3);
