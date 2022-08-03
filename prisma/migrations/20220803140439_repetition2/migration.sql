/*
  Warnings:

  - A unique constraint covering the columns `[FK_FlashcardStackID]` on the table `Repetition` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Repetition_FK_FlashcardStackID_key" ON "Repetition"("FK_FlashcardStackID");
