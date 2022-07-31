/*
  Warnings:

  - The primary key for the `UserOnGroup` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `JoinDate` on the `UserOnGroup` table. All the data in the column will be lost.
  - You are about to drop the column `StudentOnGroupID` on the `UserOnGroup` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserOnGroup" DROP CONSTRAINT "UserOnGroup_pkey",
DROP COLUMN "JoinDate",
DROP COLUMN "StudentOnGroupID",
ADD COLUMN     "AcceptDate" TIMESTAMP(3),
ADD COLUMN     "RemoveDate" TIMESTAMP(3),
ADD COLUMN     "SendDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "UserOnGroupID" SERIAL NOT NULL,
ADD CONSTRAINT "UserOnGroup_pkey" PRIMARY KEY ("UserOnGroupID");
