/*
  Warnings:

  - Added the required column `stationId` to the `DataPlueView` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DataPlueView" ADD COLUMN     "stationId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Station" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "macAddress" TEXT NOT NULL,

    CONSTRAINT "Station_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Station_macAddress_key" ON "Station"("macAddress");

-- AddForeignKey
ALTER TABLE "DataPlueView" ADD CONSTRAINT "DataPlueView_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "Station"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
