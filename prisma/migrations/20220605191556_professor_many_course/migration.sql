/*
  Warnings:

  - You are about to drop the `ProfessorsOnCourses` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProfessorsOnCourses" DROP CONSTRAINT "ProfessorsOnCourses_FK_CourseID_fkey";

-- DropForeignKey
ALTER TABLE "ProfessorsOnCourses" DROP CONSTRAINT "ProfessorsOnCourses_FK_ProfessorID_fkey";

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "FK_ProfessorID" INTEGER;

-- DropTable
DROP TABLE "ProfessorsOnCourses";

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_FK_ProfessorID_fkey" FOREIGN KEY ("FK_ProfessorID") REFERENCES "Professor"("ProfessorID") ON DELETE SET NULL ON UPDATE CASCADE;
