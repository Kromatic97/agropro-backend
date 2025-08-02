

import EgresoForm from './egresos/EgresoForm';
import styles from './page.module.css';

export default function Page() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Registrar Egreso</h1>
      <EgresoForm />
    </main>
  );
  //decia que solucionaba//
}

