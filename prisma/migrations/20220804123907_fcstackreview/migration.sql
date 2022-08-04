-- AlterTable
ALTER TABLE "FlashcardReview" ADD COLUMN     "FK_FlashcardStackReviewID" TEXT;

-- CreateTable
CREATE TABLE "FlashcardStackReview" (
    "FlashcardStackReviewID" TEXT NOT NULL,
    "CreatedTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "FK_FlashcardStackID" TEXT,

    CONSTRAINT "FlashcardStackReview_pkey" PRIMARY KEY ("FlashcardStackReviewID")
);

-- AddForeignKey
ALTER TABLE "FlashcardStackReview" ADD CONSTRAINT "FlashcardStackReview_FK_FlashcardStackID_fkey" FOREIGN KEY ("FK_FlashcardStackID") REFERENCES "FlashcardStack"("FlashcardStackID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlashcardReview" ADD CONSTRAINT "FlashcardReview_FK_FlashcardStackReviewID_fkey" FOREIGN KEY ("FK_FlashcardStackReviewID") REFERENCES "FlashcardStackReview"("FlashcardStackReviewID") ON DELETE SET NULL ON UPDATE CASCADE;
