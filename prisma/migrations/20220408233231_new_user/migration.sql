-- CreateEnum
CREATE TYPE "Visibility" AS ENUM ('HIDDEN', 'PRIVATE', 'PUBLIC');

-- CreateTable
CREATE TABLE "Account" (
    "accountId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("accountId")
);

-- CreateTable
CREATE TABLE "Session" (
    "sessionId" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("sessionId")
);

-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "defaultVisibility" "Visibility",

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "CourseOnUser" (
    "courseOnUserId" SERIAL NOT NULL,
    "HOLDER" TEXT,
    "FK_UserId" TEXT,
    "FK_CourseId" INTEGER,

    CONSTRAINT "CourseOnUser_pkey" PRIMARY KEY ("courseOnUserId")
);

-- CreateTable
CREATE TABLE "Course" (
    "courseId" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "FK_SchoolId" INTEGER,
    "official" BOOLEAN NOT NULL DEFAULT false,
    "code" TEXT,
    "title" TEXT,
    "term" TEXT,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("courseId")
);

-- CreateTable
CREATE TABLE "School" (
    "schoolId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "classSupport" BOOLEAN NOT NULL,

    CONSTRAINT "School_pkey" PRIMARY KEY ("schoolId")
);

-- CreateTable
CREATE TABLE "Professor" (
    "professorId" SERIAL NOT NULL,
    "FK_CourseId" INTEGER,
    "name" TEXT NOT NULL,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("professorId")
);

-- CreateTable
CREATE TABLE "Flow" (
    "flowId" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "FK_UserId" TEXT,
    "title" TEXT,
    "body" TEXT,
    "visibility" "Visibility",

    CONSTRAINT "Flow_pkey" PRIMARY KEY ("flowId")
);

-- CreateTable
CREATE TABLE "FlowTagOnFlow" (
    "flowTagOnFlowId" SERIAL NOT NULL,
    "HOLDER" TEXT,
    "FK_FlowId" INTEGER,
    "FK_FlowTagId" INTEGER,

    CONSTRAINT "FlowTagOnFlow_pkey" PRIMARY KEY ("flowTagOnFlowId")
);

-- CreateTable
CREATE TABLE "FlowTag" (
    "FlowTagId" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "FK_UserId" TEXT,
    "public" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,

    CONSTRAINT "FlowTag_pkey" PRIMARY KEY ("FlowTagId")
);

-- CreateTable
CREATE TABLE "FlashCardStack" (
    "flashCardStackId" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "FK_FlowId" INTEGER,
    "FK_UserId" TEXT,
    "title" TEXT DEFAULT E'Untitled',

    CONSTRAINT "FlashCardStack_pkey" PRIMARY KEY ("flashCardStackId")
);

-- CreateTable
CREATE TABLE "FlashCard" (
    "flashCardId" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "FK_FlashCardStackId" INTEGER,
    "position" INTEGER NOT NULL,
    "front" TEXT,
    "back" TEXT,

    CONSTRAINT "FlashCard_pkey" PRIMARY KEY ("flashCardId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseOnUser" ADD CONSTRAINT "CourseOnUser_FK_UserId_fkey" FOREIGN KEY ("FK_UserId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseOnUser" ADD CONSTRAINT "CourseOnUser_FK_CourseId_fkey" FOREIGN KEY ("FK_CourseId") REFERENCES "Course"("courseId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_FK_SchoolId_fkey" FOREIGN KEY ("FK_SchoolId") REFERENCES "School"("schoolId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professor" ADD CONSTRAINT "Professor_FK_CourseId_fkey" FOREIGN KEY ("FK_CourseId") REFERENCES "Course"("courseId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flow" ADD CONSTRAINT "Flow_FK_UserId_fkey" FOREIGN KEY ("FK_UserId") REFERENCES "User"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowTagOnFlow" ADD CONSTRAINT "FlowTagOnFlow_FK_FlowId_fkey" FOREIGN KEY ("FK_FlowId") REFERENCES "Flow"("flowId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowTagOnFlow" ADD CONSTRAINT "FlowTagOnFlow_FK_FlowTagId_fkey" FOREIGN KEY ("FK_FlowTagId") REFERENCES "FlowTag"("FlowTagId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowTag" ADD CONSTRAINT "FlowTag_FK_UserId_fkey" FOREIGN KEY ("FK_UserId") REFERENCES "User"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlashCardStack" ADD CONSTRAINT "FlashCardStack_FK_UserId_fkey" FOREIGN KEY ("FK_UserId") REFERENCES "User"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlashCardStack" ADD CONSTRAINT "FlashCardStack_FK_FlowId_fkey" FOREIGN KEY ("FK_FlowId") REFERENCES "Flow"("flowId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlashCard" ADD CONSTRAINT "FlashCard_FK_FlashCardStackId_fkey" FOREIGN KEY ("FK_FlashCardStackId") REFERENCES "FlashCardStack"("flashCardStackId") ON DELETE SET NULL ON UPDATE CASCADE;
