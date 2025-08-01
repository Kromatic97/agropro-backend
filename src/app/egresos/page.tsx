// src/app/egresos/page.tsx
import EgresoForm from './EgresoForm';

export default function Page() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Registrar nuevo egreso</h1>
      <EgresoForm />
    </div>
  );
}
