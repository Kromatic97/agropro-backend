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
  onUpdate: (id: number, field: string, value: string | number) => void;
  onDelete: (id: number) => void;
};

export default function DetalleEgresoItem({ detalle, divisiones, onUpdate, onDelete }: Props) {
  return (
    <div className="border p-3 rounded-md mb-3 bg-gray-50 dark:bg-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">División</label>
          <select
            value={detalle.divisionId}
            onChange={e => onUpdate(detalle.id, 'divisionId', e.target.value)}
            className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
          >
            <option value="">Seleccionar</option>
            {divisiones.map(div => (
              <option key={div.id} value={div.id}>{div.nombre}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Objeto</label>
          <input
            type="text"
            value={detalle.objeto}
            onChange={e => onUpdate(detalle.id, 'objeto', e.target.value)}
            className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Descripción</label>
          <input
            type="text"
            value={detalle.descripcion}
            onChange={e => onUpdate(detalle.id, 'descripcion', e.target.value)}
            className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Monto</label>
          <input
            type="number"
            value={detalle.monto}
            onChange={e => onUpdate(detalle.id, 'monto', parseFloat(e.target.value))}
            className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
        </div>
      </div>

      <div className="mt-2 text-right">
        <button
          type="button"
          onClick={() => onDelete(detalle.id)}
          className="text-red-600 hover:underline text-sm dark:text-red-400"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
