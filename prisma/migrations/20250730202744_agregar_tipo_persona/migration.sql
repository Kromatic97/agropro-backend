/*
  Warnings:

  - Added the required column `tipoPersona` to the `Egreso` table without a default value. This is not possible if the table is not empty.
  - Made the column `personaId` on table `Egreso` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Egreso" DROP CONSTRAINT "fk_egreso_funcionario";

-- DropForeignKey
ALTER TABLE "Egreso" DROP CONSTRAINT "fk_egreso_persona";

-- DropForeignKey
ALTER TABLE "Egreso" DROP CONSTRAINT "fk_egreso_proveedor";

-- AlterTable
ALTER TABLE "Egreso" ADD COLUMN     "tipoPersona" TEXT NOT NULL,
ALTER COLUMN "personaId" SET NOT NULL,
ALTER COLUMN "fecha" SET DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "Egreso" ADD CONSTRAINT "Egreso_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
