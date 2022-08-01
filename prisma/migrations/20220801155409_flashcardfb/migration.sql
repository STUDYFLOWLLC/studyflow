/*
  Warnings:

  - Made the column `Front` on table `Flashcard` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Back` on table `Flashcard` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Flashcard" ALTER COLUMN "Front" SET NOT NULL,
ALTER COLUMN "Front" SET DEFAULT E'',
ALTER COLUMN "Back" SET NOT NULL,
ALTER COLUMN "Back" SET DEFAULT E'';
