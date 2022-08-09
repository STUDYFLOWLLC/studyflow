-- AlterTable
ALTER TABLE "BugReport" ADD COLUMN     "FixedTime" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "FeatureRequest" ADD COLUMN     "ImplementedTime" TIMESTAMP(3);
