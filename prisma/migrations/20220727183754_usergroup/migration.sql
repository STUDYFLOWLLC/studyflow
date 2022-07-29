-- CreateTable
CREATE TABLE "UserOnGroup" (
    "StudentOnGroupID" SERIAL NOT NULL,
    "FK_UserID" INTEGER,
    "FK_UserGroupID" INTEGER,

    CONSTRAINT "UserOnGroup_pkey" PRIMARY KEY ("StudentOnGroupID")
);

-- CreateTable
CREATE TABLE "UserGroup" (
    "UserGroupID" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "FK_UserID" INTEGER NOT NULL,

    CONSTRAINT "UserGroup_pkey" PRIMARY KEY ("UserGroupID")
);

-- AddForeignKey
ALTER TABLE "UserOnGroup" ADD CONSTRAINT "UserOnGroup_FK_UserGroupID_fkey" FOREIGN KEY ("FK_UserGroupID") REFERENCES "UserGroup"("UserGroupID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnGroup" ADD CONSTRAINT "UserOnGroup_FK_UserID_fkey" FOREIGN KEY ("FK_UserID") REFERENCES "User"("UserID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGroup" ADD CONSTRAINT "UserGroup_FK_UserID_fkey" FOREIGN KEY ("FK_UserID") REFERENCES "User"("UserID") ON DELETE CASCADE ON UPDATE CASCADE;
