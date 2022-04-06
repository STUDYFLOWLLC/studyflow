-- CreateEnum
CREATE TYPE "Visibility" AS ENUM ('HIDDEN', 'PRIVATE', 'PUBLIC');

-- CreateTable
CREATE TABLE "User" (
    "UserID" SERIAL NOT NULL,
    "CreatedTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Email" TEXT NOT NULL,
    "UID" TEXT,
    "DisplayName" TEXT,
    "ProfilePictureLink" TEXT,
    "DefaultVisibility" "Visibility",

    CONSTRAINT "User_pkey" PRIMARY KEY ("UserID")
);

-- CreateTable
CREATE TABLE "CourseOnUser" (
    "CourseOnUserID" SERIAL NOT NULL,
    "FK_UserID" INTEGER,
    "FK_CourseID" INTEGER,

    CONSTRAINT "CourseOnUser_pkey" PRIMARY KEY ("CourseOnUserID")
);

-- CreateTable
CREATE TABLE "Course" (
    "CourseID" SERIAL NOT NULL,
    "CreatedTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "FK_SchoolID" INTEGER,
    "IsOfficial" BOOLEAN NOT NULL DEFAULT false,
    "Code" TEXT,
    "Title" TEXT,
    "Term" TEXT,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("CourseID")
);

-- CreateTable
CREATE TABLE "School" (
    "SchoolID" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "HasClassSupport" BOOLEAN NOT NULL,

    CONSTRAINT "School_pkey" PRIMARY KEY ("SchoolID")
);

-- CreateTable
CREATE TABLE "Professor" (
    "ProfessorID" SERIAL NOT NULL,
    "FK_CourseID" INTEGER,
    "Name" TEXT NOT NULL,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("ProfessorID")
);

-- CreateTable
CREATE TABLE "Flow" (
    "FlowID" SERIAL NOT NULL,
    "CreatedTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "FK_UserID" INTEGER,
    "Title" TEXT,
    "Body" TEXT,
    "Visibility" "Visibility",

    CONSTRAINT "Flow_pkey" PRIMARY KEY ("FlowID")
);

-- CreateTable
CREATE TABLE "FlowTagOnFlow" (
    "FlowTagOnFlowID" SERIAL NOT NULL,
    "FK_FlowID" INTEGER,
    "FK_FlowTagID" INTEGER,

    CONSTRAINT "FlowTagOnFlow_pkey" PRIMARY KEY ("FlowTagOnFlowID")
);

-- CreateTable
CREATE TABLE "FlowTag" (
    "FlowTagID" SERIAL NOT NULL,
    "CreatedTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "FK_UserID" INTEGER,
    "Public" BOOLEAN NOT NULL DEFAULT false,
    "Name" TEXT NOT NULL,

    CONSTRAINT "FlowTag_pkey" PRIMARY KEY ("FlowTagID")
);

-- CreateTable
CREATE TABLE "FlashCardStack" (
    "FlashCardStackID" SERIAL NOT NULL,
    "CreatedTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "FK_FlowID" INTEGER,
    "FK_UserID" INTEGER,

    CONSTRAINT "FlashCardStack_pkey" PRIMARY KEY ("FlashCardStackID")
);

-- CreateTable
CREATE TABLE "FlashCard" (
    "FlashCardID" SERIAL NOT NULL,
    "CreatedTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "FK_FlashCardStackID" INTEGER,
    "Position" INTEGER NOT NULL,
    "Front" TEXT,
    "Back" TEXT,

    CONSTRAINT "FlashCard_pkey" PRIMARY KEY ("FlashCardID")
);

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
