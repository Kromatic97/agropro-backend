/*
  Warnings:

  - You are about to drop the column `cantidad` on the `DetalleEgreso` table. All the data in the column will be lost.
  - You are about to drop the column `ivaMonto` on the `DetalleEgreso` table. All the data in the column will be lost.
  - You are about to drop the column `precioUnitario` on the `DetalleEgreso` table. All the data in the column will be lost.
  - You are about to drop the column `subtotal` on the `DetalleEgreso` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `DetalleEgreso` table. All the data in the column will be lost.
  - You are about to drop the column `detalleEgresoId` on the `ObjetoGasto` table. All the data in the column will be lost.
  - Added the required column `monto` to the `DetalleEgreso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `objetoGastoId` to the `DetalleEgreso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descripcion` to the `ObjetoGasto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ObjetoGasto" DROP CONSTRAINT "ObjetoGasto_detalleEgresoId_fkey";

-- AlterTable
ALTER TABLE "DetalleEgreso" DROP COLUMN "cantidad",
DROP COLUMN "ivaMonto",
DROP COLUMN "precioUnitario",
DROP COLUMN "subtotal",
DROP COLUMN "total",
ADD COLUMN     "monto" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "objetoGastoId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ObjetoGasto" DROP COLUMN "detalleEgresoId",
ADD COLUMN     "descripcion" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "DetalleEgreso" ADD CONSTRAINT "DetalleEgreso_objetoGastoId_fkey" FOREIGN KEY ("objetoGastoId") REFERENCES "ObjetoGasto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
