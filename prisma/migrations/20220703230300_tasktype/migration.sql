-- CreateEnum
CREATE TYPE "TaskType" AS ENUM ('WORK_ON', 'DUE', 'REVIEW');

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "Type" "TaskType";
