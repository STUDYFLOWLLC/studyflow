/*
  Warnings:

  - You are about to drop the column `LastOpened` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Flow" ADD COLUMN     "LastOpened" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "LastOpened";
