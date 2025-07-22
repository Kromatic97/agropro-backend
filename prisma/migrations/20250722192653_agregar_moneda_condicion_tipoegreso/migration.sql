/*
  Warnings:

  - Added the required column `descripcion` to the `Egreso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha` to the `Egreso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `monto` to the `Egreso` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Egreso" ADD COLUMN     "descripcion" TEXT NOT NULL,
ADD COLUMN     "fecha" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "monto" DOUBLE PRECISION NOT NULL;
