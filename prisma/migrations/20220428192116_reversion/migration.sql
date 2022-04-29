/*
  Warnings:

  - Added the required column `SupabaseID` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "SupabaseID" TEXT NOT NULL;
