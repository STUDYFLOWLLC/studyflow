/*
  Warnings:

  - The primary key for the `Course` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `FK_SchoolId` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `code` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `courseId` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `createdTime` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `official` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `term` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Course` table. All the data in the column will be lost.
  - The primary key for the `CourseOnUser` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `FK_CourseId` on the `CourseOnUser` table. All the data in the column will be lost.
  - You are about to drop the column `FK_UserId` on the `CourseOnUser` table. All the data in the column will be lost.
  - You are about to drop the column `courseOnUserId` on the `CourseOnUser` table. All the data in the column will be lost.
  - The primary key for the `FlashCard` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `FK_FlashCardStackId` on the `FlashCard` table. All the data in the column will be lost.
  - You are about to drop the column `back` on the `FlashCard` table. All the data in the column will be lost.
  - You are about to drop the column `createdTime` on the `FlashCard` table. All the data in the column will be lost.
  - You are about to drop the column `flashCardId` on the `FlashCard` table. All the data in the column will be lost.
  - You are about to drop the column `front` on the `FlashCard` table. All the data in the column will be lost.
  - You are about to drop the column `position` on the `FlashCard` table. All the data in the column will be lost.
  - The primary key for the `FlashCardStack` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `FK_FlowId` on the `FlashCardStack` table. All the data in the column will be lost.
  - You are about to drop the column `FK_UserId` on the `FlashCardStack` table. All the data in the column will be lost.
  - You are about to drop the column `createdTime` on the `FlashCardStack` table. All the data in the column will be lost.
  - You are about to drop the column `flashCardStackId` on the `FlashCardStack` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `FlashCardStack` table. All the data in the column will be lost.
  - The primary key for the `Flow` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `FK_UserId` on the `Flow` table. All the data in the column will be lost.
  - You are about to drop the column `body` on the `Flow` table. All the data in the column will be lost.
  - You are about to drop the column `createdTime` on the `Flow` table. All the data in the column will be lost.
  - You are about to drop the column `flowId` on the `Flow` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Flow` table. All the data in the column will be lost.
  - You are about to drop the column `visibility` on the `Flow` table. All the data in the column will be lost.
  - The primary key for the `FlowTag` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `FK_UserId` on the `FlowTag` table. All the data in the column will be lost.
  - You are about to drop the column `FlowTagId` on the `FlowTag` table. All the data in the column will be lost.
  - You are about to drop the column `createdTime` on the `FlowTag` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `FlowTag` table. All the data in the column will be lost.
  - You are about to drop the column `public` on the `FlowTag` table. All the data in the column will be lost.
  - The primary key for the `FlowTagOnFlow` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `FK_FlowId` on the `FlowTagOnFlow` table. All the data in the column will be lost.
  - You are about to drop the column `FK_FlowTagId` on the `FlowTagOnFlow` table. All the data in the column will be lost.
  - You are about to drop the column `flowTagOnFlowId` on the `FlowTagOnFlow` table. All the data in the column will be lost.
  - The primary key for the `Professor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `FK_CourseId` on the `Professor` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Professor` table. All the data in the column will be lost.
  - You are about to drop the column `professorId` on the `Professor` table. All the data in the column will be lost.
  - The primary key for the `School` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `classSupport` on the `School` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `School` table. All the data in the column will be lost.
  - You are about to drop the column `schoolId` on the `School` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `defaultVisibility` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `imageLink` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `User` table. All the data in the column will be lost.
  - Added the required column `Position` to the `FlashCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Name` to the `FlowTag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Name` to the `Professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `HasClassSupport` to the `School` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Name` to the `School` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_FK_SchoolId_fkey";

-- DropForeignKey
ALTER TABLE "CourseOnUser" DROP CONSTRAINT "CourseOnUser_FK_CourseId_fkey";

-- DropForeignKey
ALTER TABLE "CourseOnUser" DROP CONSTRAINT "CourseOnUser_FK_UserId_fkey";

-- DropForeignKey
ALTER TABLE "FlashCard" DROP CONSTRAINT "FlashCard_FK_FlashCardStackId_fkey";

-- DropForeignKey
ALTER TABLE "FlashCardStack" DROP CONSTRAINT "FlashCardStack_FK_FlowId_fkey";

-- DropForeignKey
ALTER TABLE "FlashCardStack" DROP CONSTRAINT "FlashCardStack_FK_UserId_fkey";

-- DropForeignKey
ALTER TABLE "Flow" DROP CONSTRAINT "Flow_FK_UserId_fkey";

-- DropForeignKey
ALTER TABLE "FlowTag" DROP CONSTRAINT "FlowTag_FK_UserId_fkey";

-- DropForeignKey
ALTER TABLE "FlowTagOnFlow" DROP CONSTRAINT "FlowTagOnFlow_FK_FlowId_fkey";

-- DropForeignKey
ALTER TABLE "FlowTagOnFlow" DROP CONSTRAINT "FlowTagOnFlow_FK_FlowTagId_fkey";

-- DropForeignKey
ALTER TABLE "Professor" DROP CONSTRAINT "Professor_FK_CourseId_fkey";

-- AlterTable
ALTER TABLE "Course" DROP CONSTRAINT "Course_pkey",
DROP COLUMN "FK_SchoolId",
DROP COLUMN "code",
DROP COLUMN "courseId",
DROP COLUMN "createdTime",
DROP COLUMN "official",
DROP COLUMN "term",
DROP COLUMN "title",
ADD COLUMN     "Code" TEXT,
ADD COLUMN     "CourseID" SERIAL NOT NULL,
ADD COLUMN     "CreatedTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "FK_SchoolID" INTEGER,
ADD COLUMN     "IsOfficial" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "Term" TEXT,
ADD COLUMN     "Title" TEXT,
ADD CONSTRAINT "Course_pkey" PRIMARY KEY ("CourseID");

-- AlterTable
ALTER TABLE "CourseOnUser" DROP CONSTRAINT "CourseOnUser_pkey",
DROP COLUMN "FK_CourseId",
DROP COLUMN "FK_UserId",
DROP COLUMN "courseOnUserId",
ADD COLUMN     "CourseOnUserID" SERIAL NOT NULL,
ADD COLUMN     "FK_CourseID" INTEGER,
ADD COLUMN     "FK_UserID" INTEGER,
ADD CONSTRAINT "CourseOnUser_pkey" PRIMARY KEY ("CourseOnUserID");

-- AlterTable
ALTER TABLE "FlashCard" DROP CONSTRAINT "FlashCard_pkey",
DROP COLUMN "FK_FlashCardStackId",
DROP COLUMN "back",
DROP COLUMN "createdTime",
DROP COLUMN "flashCardId",
DROP COLUMN "front",
DROP COLUMN "position",
ADD COLUMN     "Back" TEXT,
ADD COLUMN     "CreatedTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "FK_FlashCardStackID" INTEGER,
ADD COLUMN     "FlashCardID" SERIAL NOT NULL,
ADD COLUMN     "Front" TEXT,
ADD COLUMN     "Position" INTEGER NOT NULL,
ADD CONSTRAINT "FlashCard_pkey" PRIMARY KEY ("FlashCardID");

-- AlterTable
ALTER TABLE "FlashCardStack" DROP CONSTRAINT "FlashCardStack_pkey",
DROP COLUMN "FK_FlowId",
DROP COLUMN "FK_UserId",
DROP COLUMN "createdTime",
DROP COLUMN "flashCardStackId",
DROP COLUMN "title",
ADD COLUMN     "CreatedTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "FK_FlowID" INTEGER,
ADD COLUMN     "FK_UserID" INTEGER,
ADD COLUMN     "FlashCardStackID" SERIAL NOT NULL,
ADD COLUMN     "Title" TEXT DEFAULT E'Untitled',
ADD CONSTRAINT "FlashCardStack_pkey" PRIMARY KEY ("FlashCardStackID");

-- AlterTable
ALTER TABLE "Flow" DROP CONSTRAINT "Flow_pkey",
DROP COLUMN "FK_UserId",
DROP COLUMN "body",
DROP COLUMN "createdTime",
DROP COLUMN "flowId",
DROP COLUMN "title",
DROP COLUMN "visibility",
ADD COLUMN     "Body" TEXT,
ADD COLUMN     "CreatedTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "FK_UserID" INTEGER,
ADD COLUMN     "FlowID" SERIAL NOT NULL,
ADD COLUMN     "Title" TEXT,
ADD COLUMN     "Visibility" "Visibility",
ADD CONSTRAINT "Flow_pkey" PRIMARY KEY ("FlowID");

-- AlterTable
ALTER TABLE "FlowTag" DROP CONSTRAINT "FlowTag_pkey",
DROP COLUMN "FK_UserId",
DROP COLUMN "FlowTagId",
DROP COLUMN "createdTime",
DROP COLUMN "name",
DROP COLUMN "public",
ADD COLUMN     "CreatedTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "FK_UserID" INTEGER,
ADD COLUMN     "FlowTagID" SERIAL NOT NULL,
ADD COLUMN     "Name" TEXT NOT NULL,
ADD COLUMN     "Public" BOOLEAN NOT NULL DEFAULT false,
ADD CONSTRAINT "FlowTag_pkey" PRIMARY KEY ("FlowTagID");

-- AlterTable
ALTER TABLE "FlowTagOnFlow" DROP CONSTRAINT "FlowTagOnFlow_pkey",
DROP COLUMN "FK_FlowId",
DROP COLUMN "FK_FlowTagId",
DROP COLUMN "flowTagOnFlowId",
ADD COLUMN     "FK_FlowID" INTEGER,
ADD COLUMN     "FK_FlowTagID" INTEGER,
ADD COLUMN     "FlowTagOnFlowID" SERIAL NOT NULL,
ADD CONSTRAINT "FlowTagOnFlow_pkey" PRIMARY KEY ("FlowTagOnFlowID");

-- AlterTable
ALTER TABLE "Professor" DROP CONSTRAINT "Professor_pkey",
DROP COLUMN "FK_CourseId",
DROP COLUMN "name",
DROP COLUMN "professorId",
ADD COLUMN     "FK_CourseID" INTEGER,
ADD COLUMN     "Name" TEXT NOT NULL,
ADD COLUMN     "ProfessorID" SERIAL NOT NULL,
ADD CONSTRAINT "Professor_pkey" PRIMARY KEY ("ProfessorID");

-- AlterTable
ALTER TABLE "School" DROP CONSTRAINT "School_pkey",
DROP COLUMN "classSupport",
DROP COLUMN "name",
DROP COLUMN "schoolId",
ADD COLUMN     "HasClassSupport" BOOLEAN NOT NULL,
ADD COLUMN     "Name" TEXT NOT NULL,
ADD COLUMN     "SchoolID" SERIAL NOT NULL,
ADD CONSTRAINT "School_pkey" PRIMARY KEY ("SchoolID");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "defaultVisibility",
DROP COLUMN "imageLink",
DROP COLUMN "name",
DROP COLUMN "userId",
ADD COLUMN     "CreatedTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "DefaultVisibility" "Visibility",
ADD COLUMN     "DisplayName" TEXT,
ADD COLUMN     "Email" TEXT NOT NULL,
ADD COLUMN     "ProfilePictureLink" TEXT,
ADD COLUMN     "UID" TEXT,
ADD COLUMN     "UserID" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("UserID");

-- AddForeignKey
ALTER TABLE "CourseOnUser" ADD CONSTRAINT "CourseOnUser_FK_UserID_fkey" FOREIGN KEY ("FK_UserID") REFERENCES "User"("UserID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseOnUser" ADD CONSTRAINT "CourseOnUser_FK_CourseID_fkey" FOREIGN KEY ("FK_CourseID") REFERENCES "Course"("CourseID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_FK_SchoolID_fkey" FOREIGN KEY ("FK_SchoolID") REFERENCES "School"("SchoolID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professor" ADD CONSTRAINT "Professor_FK_CourseID_fkey" FOREIGN KEY ("FK_CourseID") REFERENCES "Course"("CourseID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flow" ADD CONSTRAINT "Flow_FK_UserID_fkey" FOREIGN KEY ("FK_UserID") REFERENCES "User"("UserID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowTagOnFlow" ADD CONSTRAINT "FlowTagOnFlow_FK_FlowID_fkey" FOREIGN KEY ("FK_FlowID") REFERENCES "Flow"("FlowID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowTagOnFlow" ADD CONSTRAINT "FlowTagOnFlow_FK_FlowTagID_fkey" FOREIGN KEY ("FK_FlowTagID") REFERENCES "FlowTag"("FlowTagID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowTag" ADD CONSTRAINT "FlowTag_FK_UserID_fkey" FOREIGN KEY ("FK_UserID") REFERENCES "User"("UserID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlashCardStack" ADD CONSTRAINT "FlashCardStack_FK_UserID_fkey" FOREIGN KEY ("FK_UserID") REFERENCES "User"("UserID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlashCardStack" ADD CONSTRAINT "FlashCardStack_FK_FlowID_fkey" FOREIGN KEY ("FK_FlowID") REFERENCES "Flow"("FlowID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlashCard" ADD CONSTRAINT "FlashCard_FK_FlashCardStackID_fkey" FOREIGN KEY ("FK_FlashCardStackID") REFERENCES "FlashCardStack"("FlashCardStackID") ON DELETE SET NULL ON UPDATE CASCADE;
