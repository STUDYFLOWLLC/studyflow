-- CreateEnum
CREATE TYPE "RepetitionType" AS ENUM ('FOURTEN', 'FOURTHIRTY', 'SIXTHIRTY');

-- AlterTable
ALTER TABLE "Repetition" ADD COLUMN     "RepetitionType" "RepetitionType" NOT NULL DEFAULT E'FOURTHIRTY';
