import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../contexts/cartContext';
import styles from './products.module.scss';

export default function Cart() {
  const { productList, removeProduct, total } = useCart();

  return (
    <div>
      <Head>
        <title>Cart | Quitanda Saltense</title>
      </Head>

      <div className={styles.bunner}>
        <h1>Confira seu carrinho!</h1>
      </div>

      <main className={styles.products}>

        {productList.length ? (
          <div className={styles.cartTotal}>
            <span>
              Total:
              {' '}
              {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>

            <div>
              <Link href="/products">
                <a type="button">Adicionar mais produtos</a>
              </Link>

              <Link href="/purchase">
                <button type="button">Prosseguir com a compra</button>
              </Link>
            </div>
          </div>
        ) : (
          <div className={styles.emptyCart}>
            <h2>Opa, parece que o carrinho está vazio!</h2>
            <Link href="/products">
              <button type="button">
                Adicionar produtos ao carrinho
                {' >'}
              </button>
            </Link>
          </div>
        )}

        <ul>
          {productList.map((product, index) => (
            <li key={product.id}>
              <Link href={`/product/${product.id}`}>
                <a>
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={200}
                    height={200}
                    objectFit="cover"
                  />
                </a>
              </Link>

              <button
                type="button"
                onClick={() => removeProduct(index, product)}
                className={styles.removeProduct}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
