-- CreateTable
CREATE TABLE "Setting" (
    "SettingID" SERIAL NOT NULL,
    "HasSeenWelcomeMessage" BOOLEAN DEFAULT false,
    "LastSeenWelcomeMessageAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "FK_UserID" INTEGER NOT NULL,

    CONSTRAINT "Setting_pkey" PRIMARY KEY ("SettingID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Setting_FK_UserID_key" ON "Setting"("FK_UserID");

-- AddForeignKey
ALTER TABLE "Setting" ADD CONSTRAINT "Setting_FK_UserID_fkey" FOREIGN KEY ("FK_UserID") REFERENCES "User"("UserID") ON DELETE RESTRICT ON UPDATE CASCADE;
