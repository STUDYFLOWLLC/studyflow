-- DropForeignKey
ALTER TABLE "Automation" DROP CONSTRAINT "Automation_FK_UserID_fkey";

-- DropForeignKey
ALTER TABLE "AutomationLog" DROP CONSTRAINT "AutomationLog_FK_CourseOnTermAutomationID_fkey";

-- DropForeignKey
ALTER TABLE "CourseOnTermAutomation" DROP CONSTRAINT "CourseOnTermAutomation_FK_AutomationID_fkey";

-- DropForeignKey
ALTER TABLE "CourseOnTermAutomation" DROP CONSTRAINT "CourseOnTermAutomation_FK_CourseOnTermID_fkey";

-- DropForeignKey
ALTER TABLE "Setting" DROP CONSTRAINT "Setting_FK_UserID_fkey";

-- AddForeignKey
ALTER TABLE "Setting" ADD CONSTRAINT "Setting_FK_UserID_fkey" FOREIGN KEY ("FK_UserID") REFERENCES "User"("UserID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AutomationLog" ADD CONSTRAINT "AutomationLog_FK_CourseOnTermAutomationID_fkey" FOREIGN KEY ("FK_CourseOnTermAutomationID") REFERENCES "CourseOnTermAutomation"("CourseOnTermAutomationID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseOnTermAutomation" ADD CONSTRAINT "CourseOnTermAutomation_FK_AutomationID_fkey" FOREIGN KEY ("FK_AutomationID") REFERENCES "Automation"("AutomationID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseOnTermAutomation" ADD CONSTRAINT "CourseOnTermAutomation_FK_CourseOnTermID_fkey" FOREIGN KEY ("FK_CourseOnTermID") REFERENCES "CourseOnTerm"("CourseOnTermID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Automation" ADD CONSTRAINT "Automation_FK_UserID_fkey" FOREIGN KEY ("FK_UserID") REFERENCES "User"("UserID") ON DELETE CASCADE ON UPDATE CASCADE;
