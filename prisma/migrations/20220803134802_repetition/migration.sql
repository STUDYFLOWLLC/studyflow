-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "FK_RepetitionID" TEXT;

-- CreateTable
CREATE TABLE "Repetition" (
    "RepetitionID" TEXT NOT NULL,
    "CreatedTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "FK_FlowID" TEXT,
    "FK_FlashcardStackID" TEXT,

    CONSTRAINT "Repetition_pkey" PRIMARY KEY ("RepetitionID")
);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_FK_RepetitionID_fkey" FOREIGN KEY ("FK_RepetitionID") REFERENCES "Repetition"("RepetitionID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Repetition" ADD CONSTRAINT "Repetition_FK_FlowID_fkey" FOREIGN KEY ("FK_FlowID") REFERENCES "Flow"("FlowID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Repetition" ADD CONSTRAINT "Repetition_FK_FlashcardStackID_fkey" FOREIGN KEY ("FK_FlashcardStackID") REFERENCES "FlashcardStack"("FlashcardStackID") ON DELETE SET NULL ON UPDATE CASCADE;
