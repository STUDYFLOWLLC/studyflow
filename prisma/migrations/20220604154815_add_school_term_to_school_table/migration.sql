/*
  Warnings:

  - You are about to drop the column `Term` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `FK_UserID` on the `FlashCardStack` table. All the data in the column will be lost.
  - You are about to drop the column `FK_UserID` on the `Flow` table. All the data in the column will be lost.
  - You are about to drop the `CourseOnUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FlowTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FlowTagOnFlow` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "TermType" AS ENUM ('QUARTER', 'TRIMESTER', 'SEMESTER', 'SUMMER');

-- CreateEnum
CREATE TYPE "FlowType" AS ENUM ('LECTURE', 'ASSIGNMENT', 'NOTE', 'EXAM');

-- DropForeignKey
ALTER TABLE "CourseOnUser" DROP CONSTRAINT "CourseOnUser_FK_CourseID_fkey";

-- DropForeignKey
ALTER TABLE "CourseOnUser" DROP CONSTRAINT "CourseOnUser_FK_UserID_fkey";

-- DropForeignKey
ALTER TABLE "FlashCardStack" DROP CONSTRAINT "FlashCardStack_FK_UserID_fkey";

-- DropForeignKey
ALTER TABLE "Flow" DROP CONSTRAINT "Flow_FK_UserID_fkey";

-- DropForeignKey
ALTER TABLE "FlowTag" DROP CONSTRAINT "FlowTag_FK_UserID_fkey";

-- DropForeignKey
ALTER TABLE "FlowTagOnFlow" DROP CONSTRAINT "FlowTagOnFlow_FK_FlowID_fkey";

-- DropForeignKey
ALTER TABLE "FlowTagOnFlow" DROP CONSTRAINT "FlowTagOnFlow_FK_FlowTagID_fkey";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "Term";

-- AlterTable
ALTER TABLE "FlashCardStack" DROP COLUMN "FK_UserID";

-- AlterTable
ALTER TABLE "Flow" DROP COLUMN "FK_UserID",
ADD COLUMN     "courseOnTermCourseOnTermID" INTEGER;

-- AlterTable
ALTER TABLE "School" ADD COLUMN     "TermType" "TermType";

-- DropTable
DROP TABLE "CourseOnUser";

-- DropTable
DROP TABLE "FlowTag";

-- DropTable
DROP TABLE "FlowTagOnFlow";

-- CreateTable
CREATE TABLE "Term" (
    "TermID" SERIAL NOT NULL,
    "CreatedTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "TermType" "TermType" NOT NULL,
    "TermName" TEXT,
    "TermStartDate" TIMESTAMP(3) NOT NULL,
    "TermEndDate" TIMESTAMP(3) NOT NULL,
    "FK_UserID" INTEGER,

    CONSTRAINT "Term_pkey" PRIMARY KEY ("TermID")
);

-- CreateTable
CREATE TABLE "CourseOnTerm" (
    "CourseOnTermID" SERIAL NOT NULL,
    "CreatedTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "FK_CourseID" INTEGER,
    "FK_TermID" INTEGER,

    CONSTRAINT "CourseOnTerm_pkey" PRIMARY KEY ("CourseOnTermID")
);

-- AddForeignKey
ALTER TABLE "Term" ADD CONSTRAINT "Term_FK_UserID_fkey" FOREIGN KEY ("FK_UserID") REFERENCES "User"("UserID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseOnTerm" ADD CONSTRAINT "CourseOnTerm_FK_TermID_fkey" FOREIGN KEY ("FK_TermID") REFERENCES "Term"("TermID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseOnTerm" ADD CONSTRAINT "CourseOnTerm_FK_CourseID_fkey" FOREIGN KEY ("FK_CourseID") REFERENCES "Course"("CourseID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flow" ADD CONSTRAINT "Flow_courseOnTermCourseOnTermID_fkey" FOREIGN KEY ("courseOnTermCourseOnTermID") REFERENCES "CourseOnTerm"("CourseOnTermID") ON DELETE SET NULL ON UPDATE CASCADE;
