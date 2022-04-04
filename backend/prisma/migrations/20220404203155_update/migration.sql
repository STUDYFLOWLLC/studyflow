/*
  Warnings:

  - You are about to drop the column `ProfilePictureLInk` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "ProfilePictureLInk",
ADD COLUMN     "ProfilePictureLink" TEXT;
