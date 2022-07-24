-- AlterTable
ALTER TABLE "CourseOnTermAutomation" ADD COLUMN     "DefaultType" "FlowType" NOT NULL DEFAULT E'LECTURE',
ADD COLUMN     "DefaultVisibility" "Visibility" NOT NULL DEFAULT E'PUBLIC';
