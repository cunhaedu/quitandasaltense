import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

export function Header() {
  const router = useRouter();

  return (
    <header className={styles.headerContainer}>
      <div>
        <img src="/logo.svg" alt="Quitandasaltense" />

        <p>Quitanda Saltense</p>
      </div>

      <menu>
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname === '/' && styles.active}>Início</a>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <a className={router.pathname === '/products' && styles.active}>Produtos</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={router.pathname === '/about' && styles.active}>Sobre</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className={router.pathname === '/contact' && styles.active}>Contato</a>
            </Link>
          </li>
          <li className={styles.cart}>
            <Link href="/cart">
              <a className={router.pathname === '/cart' && styles.active}>
                <p>Carrinho</p>
                <img src="/buy.svg" alt="carrinho" />
              </a>
            </Link>
          </li>
        </ul>
      </menu>
    </header>
  );
}
