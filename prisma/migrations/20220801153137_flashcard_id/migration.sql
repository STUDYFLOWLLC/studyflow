/*
  Warnings:

  - You are about to drop the `FlashCard` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FlashCardStack` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FlashCard" DROP CONSTRAINT "FlashCard_FK_FlashCardStackID_fkey";

-- DropForeignKey
ALTER TABLE "FlashCardStack" DROP CONSTRAINT "FlashCardStack_FK_FlowID_fkey";

-- DropTable
DROP TABLE "FlashCard";

-- DropTable
DROP TABLE "FlashCardStack";

-- CreateTable
CREATE TABLE "FlashcardStack" (
    "FlashcardStackID" TEXT NOT NULL,
    "CreatedTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "FK_FlowID" TEXT,
    "Title" TEXT DEFAULT E'Untitled',

    CONSTRAINT "FlashcardStack_pkey" PRIMARY KEY ("FlashcardStackID")
);

-- CreateTable
CREATE TABLE "Flashcard" (
    "FlashcardID" TEXT NOT NULL,
    "CreatedTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "FK_FlashcardStackID" TEXT,
    "Position" INTEGER NOT NULL,
    "Front" TEXT,
    "Back" TEXT,

    CONSTRAINT "Flashcard_pkey" PRIMARY KEY ("FlashcardID")
);

-- AddForeignKey
ALTER TABLE "FlashcardStack" ADD CONSTRAINT "FlashcardStack_FK_FlowID_fkey" FOREIGN KEY ("FK_FlowID") REFERENCES "Flow"("FlowID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flashcard" ADD CONSTRAINT "Flashcard_FK_FlashcardStackID_fkey" FOREIGN KEY ("FK_FlashcardStackID") REFERENCES "FlashcardStack"("FlashcardStackID") ON DELETE SET NULL ON UPDATE CASCADE;
