-- AlterTable
ALTER TABLE "Professor" ADD COLUMN     "FK_SchoolID" INTEGER;

-- AddForeignKey
ALTER TABLE "Professor" ADD CONSTRAINT "Professor_FK_SchoolID_fkey" FOREIGN KEY ("FK_SchoolID") REFERENCES "School"("SchoolID") ON DELETE SET NULL ON UPDATE CASCADE;
