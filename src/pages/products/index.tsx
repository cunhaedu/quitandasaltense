import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { api } from '../../services/api';
import styles from './products.module.scss';

type Product = {
  id: string;
  title: string;
  price: string;
  image: string;
}

type HomeProps = {
  products: Product[];
};

export default function Products({
  products,
}: HomeProps) {
  return (
    <div>
      <Head>
        <title>Products | Quitanda Saltense</title>
      </Head>

      <div className={styles.bunner}>
        <h1>Confira os nossos produtos!</h1>
      </div>

      <main className={styles.products}>
        <ul>
          {products.map((product) => (
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

              <p>{product.title}</p>
              <span>{Number(product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('products', {
    params: {
      _limit: 12,
    },
  });

  return {
    props: {
      products: data,
    },
    revalidate: 60 * 60 * 8, // 8 hours
  };
};
