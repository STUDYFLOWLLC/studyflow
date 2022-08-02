/*
  Warnings:

  - You are about to drop the `UserGroup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserOnGroup` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserGroup" DROP CONSTRAINT "UserGroup_FK_UserID_fkey";

-- DropForeignKey
ALTER TABLE "UserOnGroup" DROP CONSTRAINT "UserOnGroup_FK_UserGroupID_fkey";

-- DropForeignKey
ALTER TABLE "UserOnGroup" DROP CONSTRAINT "UserOnGroup_FK_UserID_fkey";

-- DropTable
DROP TABLE "UserGroup";

-- DropTable
DROP TABLE "UserOnGroup";

-- CreateTable
CREATE TABLE "UserOnStudyGroup" (
    "UserOnGroupID" SERIAL NOT NULL,
    "SendDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "AcceptDate" TIMESTAMP(3),
    "RemoveDate" TIMESTAMP(3),
    "FK_UserID" INTEGER,
    "FK_StudyGroupID" INTEGER,

    CONSTRAINT "UserOnStudyGroup_pkey" PRIMARY KEY ("UserOnGroupID")
);

-- CreateTable
CREATE TABLE "StudyGroup" (
    "StudyGroupID" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "FK_UserID" INTEGER NOT NULL,

    CONSTRAINT "StudyGroup_pkey" PRIMARY KEY ("StudyGroupID")
);

-- AddForeignKey
ALTER TABLE "UserOnStudyGroup" ADD CONSTRAINT "UserOnStudyGroup_FK_StudyGroupID_fkey" FOREIGN KEY ("FK_StudyGroupID") REFERENCES "StudyGroup"("StudyGroupID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnStudyGroup" ADD CONSTRAINT "UserOnStudyGroup_FK_UserID_fkey" FOREIGN KEY ("FK_UserID") REFERENCES "User"("UserID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyGroup" ADD CONSTRAINT "StudyGroup_FK_UserID_fkey" FOREIGN KEY ("FK_UserID") REFERENCES "User"("UserID") ON DELETE CASCADE ON UPDATE CASCADE;
