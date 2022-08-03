/*
  Warnings:

  - A unique constraint covering the columns `[FK_FlowID]` on the table `Repetition` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Repetition_FK_FlowID_key" ON "Repetition"("FK_FlowID");
