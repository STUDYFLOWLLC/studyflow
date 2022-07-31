-- AlterTable
ALTER TABLE "CourseOnTermAutomation" ALTER COLUMN "DefaultVisibility" DROP DEFAULT;

-- CreateTable
CREATE TABLE "Friendship" (
    "FriendshipID" SERIAL NOT NULL,
    "SentTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "AcceptedTime" TIMESTAMP(3),
    "FK_UserFromID" INTEGER,
    "FK_UserToID" INTEGER,

    CONSTRAINT "Friendship_pkey" PRIMARY KEY ("FriendshipID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Friendship_FK_UserFromID_key" ON "Friendship"("FK_UserFromID");

-- CreateIndex
CREATE UNIQUE INDEX "Friendship_FK_UserToID_key" ON "Friendship"("FK_UserToID");

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_FK_UserFromID_fkey" FOREIGN KEY ("FK_UserFromID") REFERENCES "User"("UserID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_FK_UserToID_fkey" FOREIGN KEY ("FK_UserToID") REFERENCES "User"("UserID") ON DELETE CASCADE ON UPDATE CASCADE;
