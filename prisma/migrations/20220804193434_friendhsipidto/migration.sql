/*
  Warnings:

  - The primary key for the `Friendship` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Friendship" DROP CONSTRAINT "Friendship_pkey",
ALTER COLUMN "FriendshipID" DROP DEFAULT,
ALTER COLUMN "FriendshipID" SET DATA TYPE TEXT,
ADD CONSTRAINT "Friendship_pkey" PRIMARY KEY ("FriendshipID");
DROP SEQUENCE "Friendship_FriendshipID_seq";
