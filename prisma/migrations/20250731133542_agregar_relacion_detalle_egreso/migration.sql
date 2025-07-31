-- CreateTable
CREATE TABLE "Division" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Division_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ObjetoGasto" (
    "id" SERIAL NOT NULL,
    "detalleEgresoId" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "referenciaId" INTEGER NOT NULL,

    CONSTRAINT "ObjetoGasto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Iva" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "porcentaje" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Iva_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetalleEgreso" (
    "id" SERIAL NOT NULL,
    "egresoId" INTEGER NOT NULL,
    "divisionId" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "cantidad" DOUBLE PRECISION NOT NULL,
    "precioUnitario" DOUBLE PRECISION NOT NULL,
    "subtotal" DOUBLE PRECISION NOT NULL,
    "ivaId" INTEGER NOT NULL,
    "ivaMonto" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "DetalleEgreso_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ObjetoGasto" ADD CONSTRAINT "ObjetoGasto_detalleEgresoId_fkey" FOREIGN KEY ("detalleEgresoId") REFERENCES "DetalleEgreso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalleEgreso" ADD CONSTRAINT "DetalleEgreso_egresoId_fkey" FOREIGN KEY ("egresoId") REFERENCES "Egreso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalleEgreso" ADD CONSTRAINT "DetalleEgreso_divisionId_fkey" FOREIGN KEY ("divisionId") REFERENCES "Division"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalleEgreso" ADD CONSTRAINT "DetalleEgreso_ivaId_fkey" FOREIGN KEY ("ivaId") REFERENCES "Iva"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
