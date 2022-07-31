/*
  Warnings:

  - You are about to drop the column `Deleted` on the `Flow` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Flow" DROP COLUMN "Deleted",
ADD COLUMN     "DeletedTime" TIMESTAMP(3);
