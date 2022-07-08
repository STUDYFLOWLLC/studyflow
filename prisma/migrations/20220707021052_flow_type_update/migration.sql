/*
  Warnings:

  - The values [EXAM] on the enum `FlowType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "FlowType_new" AS ENUM ('LECTURE', 'DISCUSSION', 'NOTE', 'ASSIGNMENT', 'ASSESSMENT', 'SYNTHESIS');
ALTER TABLE "Flow" ALTER COLUMN "Type" TYPE "FlowType_new" USING ("Type"::text::"FlowType_new");
ALTER TYPE "FlowType" RENAME TO "FlowType_old";
ALTER TYPE "FlowType_new" RENAME TO "FlowType";
DROP TYPE "FlowType_old";
COMMIT;
