// src/app/egresos/page.tsx
import EgresoForm from './EgresoForm';

export default function Page() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Registrar Egreso</h1>
      <EgresoForm />
    </main>
  );
}
