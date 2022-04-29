/*
  Warnings:

  - The `FK_UserId` column on the `CourseOnUser` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `FK_UserId` column on the `FlashCardStack` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `FK_UserId` column on the `Flow` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `FK_UserId` column on the `FlowTag` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.
  - The `userId` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "CourseOnUser" DROP CONSTRAINT "CourseOnUser_FK_UserId_fkey";

-- DropForeignKey
ALTER TABLE "FlashCardStack" DROP CONSTRAINT "FlashCardStack_FK_UserId_fkey";

-- DropForeignKey
ALTER TABLE "Flow" DROP CONSTRAINT "Flow_FK_UserId_fkey";

-- DropForeignKey
ALTER TABLE "FlowTag" DROP CONSTRAINT "FlowTag_FK_UserId_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "CourseOnUser" DROP COLUMN "FK_UserId",
ADD COLUMN     "FK_UserId" INTEGER;

-- AlterTable
ALTER TABLE "FlashCardStack" DROP COLUMN "FK_UserId",
ADD COLUMN     "FK_UserId" INTEGER;

-- AlterTable
ALTER TABLE "Flow" DROP COLUMN "FK_UserId",
ADD COLUMN     "FK_UserId" INTEGER;

-- AlterTable
ALTER TABLE "FlowTag" DROP COLUMN "FK_UserId",
ADD COLUMN     "FK_UserId" INTEGER;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "email",
DROP COLUMN "emailVerified",
DROP COLUMN "image",
ADD COLUMN     "imageLink" TEXT,
DROP COLUMN "userId",
ADD COLUMN     "userId" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("userId");

-- AddForeignKey
ALTER TABLE "CourseOnUser" ADD CONSTRAINT "CourseOnUser_FK_UserId_fkey" FOREIGN KEY ("FK_UserId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flow" ADD CONSTRAINT "Flow_FK_UserId_fkey" FOREIGN KEY ("FK_UserId") REFERENCES "User"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowTag" ADD CONSTRAINT "FlowTag_FK_UserId_fkey" FOREIGN KEY ("FK_UserId") REFERENCES "User"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlashCardStack" ADD CONSTRAINT "FlashCardStack_FK_UserId_fkey" FOREIGN KEY ("FK_UserId") REFERENCES "User"("userId") ON DELETE SET NULL ON UPDATE CASCADE;
