-- AlterTable
ALTER TABLE "CourseOnTermAutomation" ADD COLUMN     "FK_CourseOnTermID" INTEGER;

-- AddForeignKey
ALTER TABLE "CourseOnTermAutomation" ADD CONSTRAINT "CourseOnTermAutomation_FK_CourseOnTermID_fkey" FOREIGN KEY ("FK_CourseOnTermID") REFERENCES "CourseOnTerm"("CourseOnTermID") ON DELETE SET NULL ON UPDATE CASCADE;
