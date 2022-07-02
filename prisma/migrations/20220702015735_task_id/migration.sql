/*
  Warnings:

  - The primary key for the `Task` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "TaskLabel" DROP CONSTRAINT "TaskLabel_FK_TaskID_fkey";

-- AlterTable
ALTER TABLE "Task" DROP CONSTRAINT "Task_pkey",
ALTER COLUMN "TaskID" DROP DEFAULT,
ALTER COLUMN "TaskID" SET DATA TYPE TEXT,
ADD CONSTRAINT "Task_pkey" PRIMARY KEY ("TaskID");
DROP SEQUENCE "Task_TaskID_seq";

-- AlterTable
ALTER TABLE "TaskLabel" ALTER COLUMN "FK_TaskID" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "TaskLabel" ADD CONSTRAINT "TaskLabel_FK_TaskID_fkey" FOREIGN KEY ("FK_TaskID") REFERENCES "Task"("TaskID") ON DELETE SET NULL ON UPDATE CASCADE;
