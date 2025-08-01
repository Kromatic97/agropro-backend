-- CreateTable
CREATE TABLE "Zafra" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Zafra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParticipanteLanzamiento" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "ParticipanteLanzamiento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DistribucionZafra" (
    "id" SERIAL NOT NULL,
    "zafraId" INTEGER NOT NULL,
    "participanteId" INTEGER NOT NULL,
    "superficie" DOUBLE PRECISION NOT NULL,
    "porcentaje" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "DistribucionZafra_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ParticipanteLanzamiento_codigo_key" ON "ParticipanteLanzamiento"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "DistribucionZafra_zafraId_participanteId_key" ON "DistribucionZafra"("zafraId", "participanteId");

-- AddForeignKey
ALTER TABLE "DistribucionZafra" ADD CONSTRAINT "DistribucionZafra_zafraId_fkey" FOREIGN KEY ("zafraId") REFERENCES "Zafra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DistribucionZafra" ADD CONSTRAINT "DistribucionZafra_participanteId_fkey" FOREIGN KEY ("participanteId") REFERENCES "ParticipanteLanzamiento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
