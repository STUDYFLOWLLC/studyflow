/*
  Warnings:

  - You are about to drop the column `TermEndDate` on the `Term` table. All the data in the column will be lost.
  - You are about to drop the column `TermStartDate` on the `Term` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Term" DROP COLUMN "TermEndDate",
DROP COLUMN "TermStartDate";
