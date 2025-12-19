-- CreateTable
CREATE TABLE "DataPlueView" (
    "id" SERIAL NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "battery" INTEGER NOT NULL,
    "ConsumoPluviometro" DOUBLE PRECISION,
    "ConsumoVelocidadeVento" DOUBLE PRECISION,
    "ConsumoDirecaoVento" DOUBLE PRECISION,
    "ConsumoTemperatura" DOUBLE PRECISION,
    "ConsumoUmidade" DOUBLE PRECISION,

    CONSTRAINT "DataPlueView_pkey" PRIMARY KEY ("id")
);
