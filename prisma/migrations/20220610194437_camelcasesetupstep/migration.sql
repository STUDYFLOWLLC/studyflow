/*
  Warnings:

  - You are about to drop the column `setupStep` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "setupStep",
ADD COLUMN     "SetupStep" "SetupStep" NOT NULL DEFAULT E'PROFILE';
