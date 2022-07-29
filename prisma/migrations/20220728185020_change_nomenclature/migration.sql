/*
  Warnings:

  - You are about to drop the column `AcceptDate` on the `UserOnStudyGroup` table. All the data in the column will be lost.
  - You are about to drop the column `RemoveDate` on the `UserOnStudyGroup` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserOnStudyGroup" DROP COLUMN "AcceptDate",
DROP COLUMN "RemoveDate",
ADD COLUMN     "AcceptedTime" TIMESTAMP(3),
ADD COLUMN     "CanceledTime" TIMESTAMP(3),
ADD COLUMN     "RejectedTime" TIMESTAMP(3),
ADD COLUMN     "RemovedTime" TIMESTAMP(3);
