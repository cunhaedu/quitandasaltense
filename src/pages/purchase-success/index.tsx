import Link from 'next/link';
import styles from './purchase-success.module.scss';

export default function PurchaseSuccess() {
  return (
    <main className={styles.main}>
      <h1>Compra realizada com sucesso!</h1>
      <span>Por favor, verifique seu email!</span>

      <Link href="/">
        <button type="button">Volta à Home</button>
      </Link>
    </main>
  );
}
