-- DropIndex
DROP INDEX "AutomationLog_FK_CourseOnTermAutomationID_key";

-- AlterTable
ALTER TABLE "AutomationLog" ADD COLUMN     "FileID" TEXT;
