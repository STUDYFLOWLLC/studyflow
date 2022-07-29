/*
  Warnings:

  - You are about to drop the column `SendDate` on the `UserOnStudyGroup` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserOnStudyGroup" DROP COLUMN "SendDate",
ADD COLUMN     "SendTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
