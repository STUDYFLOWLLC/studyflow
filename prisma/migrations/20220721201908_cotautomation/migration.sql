-- CreateTable
CREATE TABLE "CourseOnTermAutomation" (
    "CourseOnTermAutomationID" SERIAL NOT NULL,
    "FilePath" TEXT NOT NULL DEFAULT E'No Path',
    "FK_AutomationID" INTEGER,

    CONSTRAINT "CourseOnTermAutomation_pkey" PRIMARY KEY ("CourseOnTermAutomationID")
);

-- AddForeignKey
ALTER TABLE "CourseOnTermAutomation" ADD CONSTRAINT "CourseOnTermAutomation_FK_AutomationID_fkey" FOREIGN KEY ("FK_AutomationID") REFERENCES "Automation"("AutomationID") ON DELETE SET NULL ON UPDATE CASCADE;
