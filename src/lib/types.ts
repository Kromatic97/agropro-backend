// src/lib/types.ts

export type Opcion = {
  id: number;
  nombre: string;
};

export type DetalleEgreso = {
  id: number;
  divisionId: number;
  objeto: string;
  descripcion: string;
  monto: number;
};
