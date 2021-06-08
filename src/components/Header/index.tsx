import Link from 'next/link';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Quitandasaltense" />

      <p>Quitanda Saltense</p>

      <menu>
        <ul>
          <li>
            <Link href="/">
              <a>Início</a>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <a>Produtos</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Sobre</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contato</a>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <a>Carrinho</a>
            </Link>
          </li>
        </ul>
      </menu>
    </header>
  );
}
