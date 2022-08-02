/*
  Warnings:

  - Made the column `DefaultVisibility` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "DefaultVisibility" SET NOT NULL,
ALTER COLUMN "DefaultVisibility" SET DEFAULT E'PUBLIC';
