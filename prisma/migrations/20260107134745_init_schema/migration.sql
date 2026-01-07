-- CreateEnum
CREATE TYPE "WindDirection" AS ENUM ('NORTE', 'NORDESTE', 'LESTE', 'SUDESTE', 'SUL', 'SUDOESTE', 'OESTE', 'NOROESTE');

-- DropForeignKey
ALTER TABLE "DataPlueView" DROP CONSTRAINT "DataPlueView_stationId_fkey";

-- AlterTable
ALTER TABLE "DataPlueView" ALTER COLUMN "time" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "weather_data" (
    "id" TEXT NOT NULL,
    "umidade" DOUBLE PRECISION NOT NULL,
    "temperatura" DOUBLE PRECISION NOT NULL,
    "velocidadeVento" DOUBLE PRECISION NOT NULL,
    "direcaoVento" "WindDirection" NOT NULL,
    "quantidadeChuva" DOUBLE PRECISION NOT NULL,
    "dataMedicao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "stationId" INTEGER NOT NULL,

    CONSTRAINT "weather_data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "weather_data_dataMedicao_idx" ON "weather_data"("dataMedicao" DESC);

-- AddForeignKey
ALTER TABLE "DataPlueView" ADD CONSTRAINT "DataPlueView_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "Station"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weather_data" ADD CONSTRAINT "weather_data_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "Station"("id") ON DELETE CASCADE ON UPDATE CASCADE;
