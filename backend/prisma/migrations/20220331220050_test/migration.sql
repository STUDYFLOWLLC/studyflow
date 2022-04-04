-- CreateEnum
CREATE TYPE "Visibility" AS ENUM ('HIDDEN', 'PRIVATE', 'PUBLIC');

-- CreateTable
CREATE TABLE "Users" (
    "UserID" BIGSERIAL NOT NULL,
    "Email" TEXT NOT NULL,
    "UID" TEXT NOT NULL,
    "DisplayName" TEXT NOT NULL,
    "ProfilePictureLInk" TEXT,
    "DefaultVisibility" "Visibility",

    CONSTRAINT "Users_pkey" PRIMARY KEY ("UserID")
);
