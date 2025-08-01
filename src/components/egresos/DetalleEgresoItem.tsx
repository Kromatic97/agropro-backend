'use client';

import React from 'react';

type DetalleEgreso = {
  id: number;
  divisionId: string;
  objeto: string;
  descripcion: string;
  monto: number;
};

type Opcion = {
  id: number;
  nombre: string;
};

type Props = {
  detalle: DetalleEgreso;
  divisiones: Opcion[];
  onChange: (id: number, field: string, value: string | number) => void;
  onRemove: (id: number) => void;
};

export default function DetalleEgresoItem({
  detalle,
  divisiones,
  onChange,
  onRemove
}: Props) {
  return (
    <div className="border rounded p-4 mb-4 space-y-3 bg-gray-50">
      <div className="flex flex-col">
        <label className="text-sm font-medium">División</label>
        <select
          name="divisionId"
          value={detalle.divisionId}
          onChange={(e) => onChange(detalle.id, 'divisionId', e.target.value)}
          className="border rounded p-2"
        >
          <option value="">Seleccionar</option>
          {divisiones.map((div) => (
            <option key={div.id} value={div.id}>{div.nombre}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium">Objeto de Gasto</label>
        <input
          type="text"
          name="objeto"
          value={detalle.objeto}
          onChange={(e) => onChange(detalle.id, 'objeto', e.target.value)}
          className="border rounded p-2"
          placeholder="Ej: ZAFRA 24/25"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium">Descripción</label>
        <input
          type="text"
          name="descripcion"
          value={detalle.descripcion}
          onChange={(e) => onChange(detalle.id, 'descripcion', e.target.value)}
          className="border rounded p-2"
          placeholder="Detalle opcional"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium">Monto</label>
        <input
          type="number"
          name="monto"
          value={detalle.monto}
          onChange={(e) => onChange(detalle.id, 'monto', parseFloat(e.target.value))}
          className="border rounded p-2"
          step="0.01"
        />
      </div>

      <button
        type="button"
        onClick={() => onRemove(detalle.id)}
        className="text-red-600 text-sm mt-2 underline"
      >
        Eliminar detalle
      </button>
    </div>
  );
}
