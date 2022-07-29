/*
  Warnings:

  - The primary key for the `UserOnStudyGroup` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `UserOnGroupID` on the `UserOnStudyGroup` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserOnStudyGroup" DROP CONSTRAINT "UserOnStudyGroup_pkey",
DROP COLUMN "UserOnGroupID",
ADD COLUMN     "UserOnStudyGroupID" SERIAL NOT NULL,
ADD CONSTRAINT "UserOnStudyGroup_pkey" PRIMARY KEY ("UserOnStudyGroupID");
