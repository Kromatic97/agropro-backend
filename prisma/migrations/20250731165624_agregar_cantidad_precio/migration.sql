/*
  Warnings:

  - Added the required column `cantidad` to the `DetalleEgreso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precioUnitario` to the `DetalleEgreso` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DetalleEgreso" ADD COLUMN     "cantidad" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "precioUnitario" DOUBLE PRECISION NOT NULL;
