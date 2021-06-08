import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../contexts/cartContext';
import { api } from '../../services/api';
import styles from './product.module.scss';

type Product = {
  id: string;
  title: string;
  price: string;
  image: string;
}

type ProductProps = {
  product: Product;
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});

export default function Product({ product }: ProductProps) {
  const { addProduct } = useCart();

  return (
    <main className={styles.main}>
      <Image
        src={product.image}
        alt={product.title}
        objectFit="cover"
        width={400}
        height={400}
      />

      <div>
        <h2>{product.title}</h2>
        <span>{Number(product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>

        <Link href="/cart">
          <button
            type="button"
            onClick={() => addProduct(product)}
          >
            Adicionar ao carrinho
          </button>
        </Link>

        {/* <button
          type="button"
          onClick={() => addProduct(product)}
        >
          Adicionar ao carrinho
        </button> */}
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;

  const { data } = await api.get(`products/${slug}`);

  return {
    props: {
      product: data,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
