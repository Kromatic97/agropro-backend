'use client';

import React, { useState, useEffect } from 'react';
import DetalleEgresoItem from '@/components/egresos/DetalleEgresoItem';
import { API_BASE_URL } from '@/lib/config';

// Tipos
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

const EgresoForm = () => {
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
        fetch(`${API_BASE_URL}/api/tipo-egreso`).then(res => res.json()),
        fetch(`${API_BASE_URL}/api/condiciones`).then(res => res.json()),
        fetch(`${API_BASE_URL}/api/monedas`).then(res => res.json()),
        fetch(`${API_BASE_URL}/api/entidades`).then(res => res.json()),
        fetch(`${API_BASE_URL}/api/divisiones`).then(res => res.json())
      ]);

      setTiposEgreso(te);
      setCondiciones(co);
      setMonedas(mo);
      setEntidades(en);
      setDivisiones(dv);

      if (formData.tipoPersona) {
        const ps = await fetch(`${API_BASE_URL}/api/personas?tipo=${formData.tipoPersona}`).then(res => res.json());
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
      const res = await fetch(`${API_BASE_URL}/api/egresos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        await res.json();
        alert('Egreso registrado correctamente');
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
    <main>
      <h1>Registrar Egreso</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Fecha</label>
          <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} />
        </div>

        <SelectInput label="Tipo de Egreso" name="tipoEgresoId" value={formData.tipoEgresoId} onChange={handleChange} opciones={tiposEgreso} />
        <SelectInput label="Condición" name="condicionId" value={formData.condicionId} onChange={handleChange} opciones={condiciones} />
        <SelectInput label="Moneda" name="monedaId" value={formData.monedaId} onChange={handleChange} opciones={monedas} />
        <SelectInput label="Entidad" name="entidadId" value={formData.entidadId} onChange={handleChange} opciones={entidades} />
        <SelectInput label="Tipo de Persona" name="tipoPersona" value={formData.tipoPersona} onChange={handleChange} opciones={[{ id: 1, nombre: 'Funcionario' }, { id: 2, nombre: 'Proveedor' }]} />
        <SelectInput label="Persona" name="personaId" value={formData.personaId} onChange={handleChange} opciones={personas} />

        <div className="form-group">
          <label>Observación</label>
          <textarea name="observacion" value={formData.observacion} onChange={handleChange} rows={3} />
        </div>

        <div className="form-group">
          <label>Detalles del Egreso</label>
          {detalles.map(detalle => (
            <DetalleEgresoItem
              key={detalle.id}
              detalle={detalle}
              divisiones={divisiones}
              onUpdate={actualizarDetalle}
              onDelete={eliminarDetalle}
            />
          ))}
          <button type="button" onClick={agregarDetalle} style={{ marginTop: '8px' }}>+ Agregar Detalle</button>
        </div>

        <button type="submit">Guardar Egreso</button>
      </form>
    </main>
  );
};

export default EgresoForm;

// Component para selects
const SelectInput = ({
  label,
  name,
  value,
  onChange,
  opciones
}: {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  opciones: Opcion[];
}) => (
  <div className="form-group">
    <label>{label}</label>
    <select name={name} value={value} onChange={onChange}>
      <option value="">Seleccionar</option>
      {opciones.map(opt => (
        <option key={opt.id} value={opt.id}>
          {opt.nombre}
        </option>
      ))}
    </select>
  </div>
);
