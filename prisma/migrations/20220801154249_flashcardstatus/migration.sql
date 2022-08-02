-- CreateEnum
CREATE TYPE "FlashcardStatus" AS ENUM ('NEUTRAL', 'CORRECT', 'INCORRECT');

-- CreateTable
CREATE TABLE "FlashcardReview" (
    "FlashcardStatusID" TEXT NOT NULL,
    "CreatedTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "FK_FlashcardID" TEXT,
    "Status" "FlashcardStatus" NOT NULL DEFAULT E'NEUTRAL',

    CONSTRAINT "FlashcardReview_pkey" PRIMARY KEY ("FlashcardStatusID")
);

-- AddForeignKey
ALTER TABLE "FlashcardReview" ADD CONSTRAINT "FlashcardReview_FK_FlashcardID_fkey" FOREIGN KEY ("FK_FlashcardID") REFERENCES "Flashcard"("FlashcardID") ON DELETE SET NULL ON UPDATE CASCADE;
