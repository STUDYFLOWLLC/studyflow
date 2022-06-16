/*
  Warnings:

  - The primary key for the `Flow` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `Type` to the `Flow` table without a default value. This is not possible if the table is not empty.
  - Made the column `Title` on table `Flow` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Visibility` on table `Flow` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "CourseOnTerm" DROP CONSTRAINT "CourseOnTerm_FK_CourseID_fkey";

-- DropForeignKey
ALTER TABLE "CourseOnTerm" DROP CONSTRAINT "CourseOnTerm_FK_TermID_fkey";

-- DropForeignKey
ALTER TABLE "FlashCardStack" DROP CONSTRAINT "FlashCardStack_FK_FlowID_fkey";

-- AlterTable
ALTER TABLE "CourseOnTerm" ALTER COLUMN "FK_CourseID" DROP NOT NULL,
ALTER COLUMN "FK_TermID" DROP NOT NULL;

-- AlterTable
ALTER TABLE "FlashCardStack" ALTER COLUMN "FK_FlowID" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Flow" DROP CONSTRAINT "Flow_pkey",
ADD COLUMN     "Type" "FlowType" NOT NULL,
ALTER COLUMN "FlowID" DROP DEFAULT,
ALTER COLUMN "FlowID" SET DATA TYPE TEXT,
ALTER COLUMN "Title" SET NOT NULL,
ALTER COLUMN "Title" SET DEFAULT E'Untitled',
ALTER COLUMN "Visibility" SET NOT NULL,
ALTER COLUMN "Visibility" SET DEFAULT E'PUBLIC',
ADD CONSTRAINT "Flow_pkey" PRIMARY KEY ("FlowID");
DROP SEQUENCE "Flow_FlowID_seq";

-- CreateTable
CREATE TABLE "Task" (
    "TaskID" SERIAL NOT NULL,
    "CreatedTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Title" TEXT NOT NULL DEFAULT E'Untitled',
    "Description" TEXT,
    "DueDate" TIMESTAMP(3),
    "FK_UserID" INTEGER,
    "FK_FlowID" TEXT,
    "FK_CourseOnTermID" INTEGER,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("TaskID")
);

-- CreateTable
CREATE TABLE "TaskLabel" (
    "TaskLabelID" SERIAL NOT NULL,
    "CreatedTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Label" TEXT NOT NULL DEFAULT E'Untitled',
    "FK_TaskID" INTEGER,

    CONSTRAINT "TaskLabel_pkey" PRIMARY KEY ("TaskLabelID")
);

-- AddForeignKey
ALTER TABLE "CourseOnTerm" ADD CONSTRAINT "CourseOnTerm_FK_TermID_fkey" FOREIGN KEY ("FK_TermID") REFERENCES "Term"("TermID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseOnTerm" ADD CONSTRAINT "CourseOnTerm_FK_CourseID_fkey" FOREIGN KEY ("FK_CourseID") REFERENCES "Course"("CourseID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlashCardStack" ADD CONSTRAINT "FlashCardStack_FK_FlowID_fkey" FOREIGN KEY ("FK_FlowID") REFERENCES "Flow"("FlowID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_FK_UserID_fkey" FOREIGN KEY ("FK_UserID") REFERENCES "User"("UserID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_FK_CourseOnTermID_fkey" FOREIGN KEY ("FK_CourseOnTermID") REFERENCES "CourseOnTerm"("CourseOnTermID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_FK_FlowID_fkey" FOREIGN KEY ("FK_FlowID") REFERENCES "Flow"("FlowID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskLabel" ADD CONSTRAINT "TaskLabel_FK_TaskID_fkey" FOREIGN KEY ("FK_TaskID") REFERENCES "Task"("TaskID") ON DELETE SET NULL ON UPDATE CASCADE;
