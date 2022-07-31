-- CreateTable
CREATE TABLE "AutomationLog" (
    "AutomationLogID" SERIAL NOT NULL,
    "Time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Success" BOOLEAN NOT NULL DEFAULT false,
    "Message" TEXT NOT NULL DEFAULT E'',
    "FK_CourseOnTermAutomationID" INTEGER NOT NULL,

    CONSTRAINT "AutomationLog_pkey" PRIMARY KEY ("AutomationLogID")
);

-- CreateIndex
CREATE UNIQUE INDEX "AutomationLog_FK_CourseOnTermAutomationID_key" ON "AutomationLog"("FK_CourseOnTermAutomationID");

-- AddForeignKey
ALTER TABLE "AutomationLog" ADD CONSTRAINT "AutomationLog_FK_CourseOnTermAutomationID_fkey" FOREIGN KEY ("FK_CourseOnTermAutomationID") REFERENCES "CourseOnTermAutomation"("CourseOnTermAutomationID") ON DELETE RESTRICT ON UPDATE CASCADE;
