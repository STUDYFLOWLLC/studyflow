/*
  Warnings:

  - Made the column `Title` on table `FlashcardStack` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "FlashcardStack" ADD COLUMN     "Description" TEXT NOT NULL DEFAULT E'Empty description',
ALTER COLUMN "Title" SET NOT NULL;
