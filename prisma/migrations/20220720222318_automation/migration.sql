-- CreateTable
CREATE TABLE "Automation" (
    "AutomationID" SERIAL NOT NULL,
    "RefreshToken" TEXT NOT NULL,
    "FK_UserID" INTEGER NOT NULL,

    CONSTRAINT "Automation_pkey" PRIMARY KEY ("AutomationID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Automation_RefreshToken_key" ON "Automation"("RefreshToken");

-- CreateIndex
CREATE UNIQUE INDEX "Automation_FK_UserID_key" ON "Automation"("FK_UserID");

-- AddForeignKey
ALTER TABLE "Automation" ADD CONSTRAINT "Automation_FK_UserID_fkey" FOREIGN KEY ("FK_UserID") REFERENCES "User"("UserID") ON DELETE RESTRICT ON UPDATE CASCADE;
