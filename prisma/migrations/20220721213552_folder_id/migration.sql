/*
  Warnings:

  - You are about to drop the column `FilePath` on the `CourseOnTermAutomation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CourseOnTermAutomation" DROP COLUMN "FilePath",
ADD COLUMN     "FolderID" TEXT NOT NULL DEFAULT E'No Folder Id';
