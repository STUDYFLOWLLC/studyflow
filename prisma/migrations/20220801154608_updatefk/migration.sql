/*
  Warnings:

  - The primary key for the `FlashcardReview` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `FlashcardStatusID` on the `FlashcardReview` table. All the data in the column will be lost.
  - The required column `FlashcardReviewID` was added to the `FlashcardReview` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "FlashcardReview" DROP CONSTRAINT "FlashcardReview_pkey",
DROP COLUMN "FlashcardStatusID",
ADD COLUMN     "FlashcardReviewID" TEXT NOT NULL,
ADD CONSTRAINT "FlashcardReview_pkey" PRIMARY KEY ("FlashcardReviewID");
