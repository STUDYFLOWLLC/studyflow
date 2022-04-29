/*
  Warnings:

  - You are about to drop the column `CreatedTime` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `DisplayName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `UID` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "CreatedTime",
DROP COLUMN "DisplayName",
DROP COLUMN "Email",
DROP COLUMN "UID",
ADD COLUMN     "Username" TEXT;
