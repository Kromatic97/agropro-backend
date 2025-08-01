'use client';

import { useState, useEffect } from 'react';
import DetalleEgresoItem from '@/components/egresos/DetalleEgresoItem';

type Opcion = {
  id: number;
  nombre: string;
};

type DetalleEgreso = {
  id: number;
  divisionId: string;
  objeto: string;
  descripcion: string;
  monto: number;
};

export default function EgresoForm() {
  const [formData, setFormData] = useState({
    fecha: '',
    tipoEgresoId: '',
    condicionId: '',
    monedaId: '',
    entidadId: '',
    tipoPersona: '',
    personaId: '',
    observacion: ''
  });

  const [tiposEgreso, setTiposEgreso] = useState<Opcion[]>([]);
  const [condiciones, setCondiciones] = useState<Opcion[]>([]);
  const [monedas, setMonedas] = useState<Opcion[]>([]);
  const [entidades, setEntidades] = useState<Opcion[]>([]);
  const [personas, setPersonas] = useState<Opcion[]>([]);
  const [divisiones, setDivisiones] = useState<Opcion[]>([]);
  const [detalles, setDetalles] = useState<DetalleEgreso[]>([]);

  useEffect(() => {
    async function fetchData() {
      const [te, co, mo, en, dv] = await Promise.all([
        fetch('/api/tipo-egreso').then(res => res.json()),
        fetch('/api/condiciones').then(res => res.json()),
        fetch('/api/monedas').then(res => res.json()),
        fetch('/api/entidades').then(res => res.json()),
        fetch('/api/divisiones').then(res => res.json())
      ]);

      setTiposEgreso(te);
      setCondiciones(co);
      setMonedas(mo);
      setEntidades(en);
      setDivisiones(dv);

      if (formData.tipoPersona) {
        const ps = await fetch(`/api/personas?tipo=${formData.tipoPersona}`).then(res => res.json());
        setPersonas(ps);
      }
    }

    fetchData();
  }, [formData.tipoPersona]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function agregarDetalle() {
    const nuevo: DetalleEgreso = {
      id: Date.now(),
      divisionId: '',
      objeto: '',
      descripcion: '',
      monto: 0
    };
    setDetalles(prev => [...prev, nuevo]);
  }

  function actualizarDetalle(id: number, field: string, value: string | number) {
    setDetalles(prev =>
      prev.map(d => d.id === id ? { ...d, [field]: value } : d)
    );
  }

  function eliminarDetalle(id: number) {
    setDetalles(prev => prev.filter(d => d.id !== id));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const payload = {
      ...formData,
      detalles: detalles.map(d => ({
        divisionId: parseInt(d.divisionId),
        objeto: d.objeto,
        descripcion: d.descripcion,
        monto: d.monto
      }))
    };

    try {
      const res = await fetch('/api/egresos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        const data = await res.json();
        alert('Egreso registrado correctamente');
        // Reset opcional:
        // setFormData({...});
        // setDetalles([]);
      } else {
        const error = await res.json();
        alert('Error al registrar: ' + error.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error inesperado al registrar el egreso');
    }
  }

  return (
    <main className="p-4 max-w-xl mx-auto bg-white rounded-2xl shadow-md mt-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Registrar Egreso</h1>

      <form className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Fecha</label>
          <input type="date" className="w-full px-3 py-2 border rounded-md text-sm" />
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Tipo de Egreso</label>
            <select className="w-full px-3 py-2 border rounded-md text-sm">
              <option>Seleccionar</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Condición</label>
            <select className="w-full px-3 py-2 border rounded-md text-sm">
              <option>Seleccionar</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Moneda</label>
            <select className="w-full px-3 py-2 border rounded-md text-sm">
              <option>Seleccionar</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Entidad</label>
            <select className="w-full px-3 py-2 border rounded-md text-sm">
              <option>Seleccionar</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Tipo de Persona</label>
            <select className="w-full px-3 py-2 border rounded-md text-sm">
              <option>Seleccionar</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Persona</label>
            <select className="w-full px-3 py-2 border rounded-md text-sm">
              <option>Seleccionar</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Observación</label>
          <textarea className="w-full px-3 py-2 border rounded-md text-sm" rows={3} />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-2">Detalles del Egreso</h2>
          <button
            type="button"
            className="text-blue-600 text-sm hover:underline"
          >
            + Agregar Detalle
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-semibold"
        >
          Guardar Egreso
        </button>
      </form>
    </main>
  );
}

