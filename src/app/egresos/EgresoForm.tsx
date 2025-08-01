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
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold text-center">Registrar Egreso</h2>

      <div className="flex flex-col">
        <label className="text-sm font-medium">Fecha</label>
        <input
          type="date"
          name="fecha"
          value={formData.fecha}
          onChange={handleChange}
          className="border rounded p-2"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium">Tipo de Egreso</label>
        <select name="tipoEgresoId" value={formData.tipoEgresoId} onChange={handleChange} className="border rounded p-2">
          <option value="">Seleccionar</option>
          {tiposEgreso.map((tipo) => (
            <option key={tipo.id} value={tipo.id}>{tipo.nombre}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium">Condición</label>
        <select name="condicionId" value={formData.condicionId} onChange={handleChange} className="border rounded p-2">
          <option value="">Seleccionar</option>
          {condiciones.map((cond) => (
            <option key={cond.id} value={cond.id}>{cond.nombre}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium">Moneda</label>
        <select name="monedaId" value={formData.monedaId} onChange={handleChange} className="border rounded p-2">
          <option value="">Seleccionar</option>
          {monedas.map((moneda) => (
            <option key={moneda.id} value={moneda.id}>{moneda.nombre}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium">Entidad</label>
        <select name="entidadId" value={formData.entidadId} onChange={handleChange} className="border rounded p-2">
          <option value="">Seleccionar</option>
          {entidades.map((entidad) => (
            <option key={entidad.id} value={entidad.id}>{entidad.nombre}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium">Tipo de Persona</label>
        <select name="tipoPersona" value={formData.tipoPersona} onChange={handleChange} className="border rounded p-2">
          <option value="">Seleccionar</option>
          <option value="funcionario">Funcionario</option>
          <option value="proveedor">Proveedor</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium">Persona</label>
        <select name="personaId" value={formData.personaId} onChange={handleChange} className="border rounded p-2">
          <option value="">Seleccionar</option>
          {personas.map((persona) => (
            <option key={persona.id} value={persona.id}>{persona.nombre}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium">Observación</label>
        <textarea
          name="observacion"
          value={formData.observacion}
          onChange={handleChange}
          className="border rounded p-2"
        />
      </div>

      <hr className="my-4" />
      <h3 className="text-lg font-semibold">Detalles del Egreso</h3>

      {detalles.map(detalle => (
        <DetalleEgresoItem
          key={detalle.id}
          detalle={detalle}
          divisiones={divisiones}
          onChange={actualizarDetalle}
          onRemove={eliminarDetalle}
        />
      ))}

      <button
        type="button"
        onClick={agregarDetalle}
        className="w-full bg-blue-600 text-white rounded p-2 font-semibold"
      >
        + Agregar Detalle
      </button>

      <button
        type="submit"
        className="w-full bg-green-600 text-white rounded p-2 font-semibold mt-4"
      >
        Guardar Egreso
      </button>
    </form>
  );
}
