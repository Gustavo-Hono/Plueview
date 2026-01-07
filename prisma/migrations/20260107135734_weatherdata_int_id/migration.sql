/*
  Warnings:

  - The primary key for the `weather_data` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `weather_data` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "weather_data" DROP CONSTRAINT "weather_data_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "weather_data_pkey" PRIMARY KEY ("id");
