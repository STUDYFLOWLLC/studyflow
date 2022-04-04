/*
  Warnings:

  - You are about to drop the `Test` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Test";

-- DropTable
DROP TABLE "Users";

-- CreateTable
CREATE TABLE "User" (
    "UserID" SERIAL NOT NULL,
    "Email" TEXT NOT NULL,
    "UID" TEXT,
    "DisplayName" TEXT,
    "ProfilePictureLInk" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("UserID")
);

-- CreateTable
CREATE TABLE "Flow" (
    "FlowID" SERIAL NOT NULL,
    "CreatedTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "CreatedById" INTEGER,
    "Title" TEXT,
    "Body" TEXT,
    "Visibility" "Visibility",

    CONSTRAINT "Flow_pkey" PRIMARY KEY ("FlowID")
);

-- AddForeignKey
ALTER TABLE "Flow" ADD CONSTRAINT "Flow_CreatedById_fkey" FOREIGN KEY ("CreatedById") REFERENCES "User"("UserID") ON DELETE SET NULL ON UPDATE CASCADE;
