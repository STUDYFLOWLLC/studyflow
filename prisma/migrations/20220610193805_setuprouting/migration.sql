/*
  Warnings:

  - You are about to drop the column `SetupStep` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "SetupStep",
ADD COLUMN     "setupStep" "SetupStep" NOT NULL DEFAULT E'PROFILE';
