/*
  Warnings:

  - You are about to drop the column `courseOnTermCourseOnTermID` on the `Flow` table. All the data in the column will be lost.
  - You are about to drop the column `FK_CourseID` on the `Professor` table. All the data in the column will be lost.
  - Made the column `FK_CourseID` on table `CourseOnTerm` required. This step will fail if there are existing NULL values in that column.
  - Made the column `FK_TermID` on table `CourseOnTerm` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Flow" DROP CONSTRAINT "Flow_courseOnTermCourseOnTermID_fkey";

-- DropForeignKey
ALTER TABLE "Professor" DROP CONSTRAINT "Professor_FK_CourseID_fkey";

-- AlterTable
ALTER TABLE "CourseOnTerm" ALTER COLUMN "FK_CourseID" SET NOT NULL,
ALTER COLUMN "FK_TermID" SET NOT NULL;

-- AlterTable
ALTER TABLE "Flow" DROP COLUMN "courseOnTermCourseOnTermID",
ADD COLUMN     "FK_CourseOnTermID" INTEGER;

-- AlterTable
ALTER TABLE "Professor" DROP COLUMN "FK_CourseID";

-- CreateTable
CREATE TABLE "ProfessorsOnCourses" (
    "ProfessorsOnCoursesID" SERIAL NOT NULL,
    "CreatedTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "FK_CourseID" INTEGER NOT NULL,
    "FK_ProfessorID" INTEGER NOT NULL,

    CONSTRAINT "ProfessorsOnCourses_pkey" PRIMARY KEY ("ProfessorsOnCoursesID")
);

-- AddForeignKey
ALTER TABLE "ProfessorsOnCourses" ADD CONSTRAINT "ProfessorsOnCourses_FK_CourseID_fkey" FOREIGN KEY ("FK_CourseID") REFERENCES "Course"("CourseID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfessorsOnCourses" ADD CONSTRAINT "ProfessorsOnCourses_FK_ProfessorID_fkey" FOREIGN KEY ("FK_ProfessorID") REFERENCES "Professor"("ProfessorID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flow" ADD CONSTRAINT "Flow_FK_CourseOnTermID_fkey" FOREIGN KEY ("FK_CourseOnTermID") REFERENCES "CourseOnTerm"("CourseOnTermID") ON DELETE SET NULL ON UPDATE CASCADE;
