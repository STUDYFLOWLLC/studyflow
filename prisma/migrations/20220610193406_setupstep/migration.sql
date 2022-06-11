/*
  Warnings:

  - You are about to drop the column `SetupComplete` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "SetupStep" AS ENUM ('PROFILE', 'EDUCATION', 'COMMUNITY', 'COMPLETE');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "SetupComplete",
ADD COLUMN     "SetupStep" "SetupStep" NOT NULL DEFAULT E'PROFILE';
