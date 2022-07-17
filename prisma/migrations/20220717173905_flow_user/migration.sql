-- AlterTable
ALTER TABLE "Flow" ADD COLUMN     "FK_UserID" INTEGER;

-- AddForeignKey
ALTER TABLE "Flow" ADD CONSTRAINT "Flow_FK_UserID_fkey" FOREIGN KEY ("FK_UserID") REFERENCES "User"("UserID") ON DELETE SET NULL ON UPDATE CASCADE;
