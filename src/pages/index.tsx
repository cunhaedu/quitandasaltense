import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { api } from '../services/api';
import styles from './home.module.scss';

type Product = {
  id: string;
  title: string;
  price: string;
  image: string;
}

type Deposition = {
  id: number;
  name: string;
  description: string;
  image: string;
}

type HomeProps = {
  latestProducts: Product[];
  latestDepositions: Deposition[];
};

export default function Home({
  latestProducts,
  latestDepositions,
}: HomeProps) {
  return (
    <div>
      <Head>
        <title>Início | Quitanda Saltense</title>
      </Head>

      <div className={styles.bunner}>
        <h1>Seja bem vindo ao nosso site!</h1>
      </div>

      <main className={styles.main}>
        <section className={styles.about}>
          <h2>Sobre</h2>

          <div>
            <p>
              Caso você seja aquela pessoa que prefere mater uma alimentação saudável,
              balanceada e com o preço acessível, está no lugar certo.
              Somos a Quitanda Saltense, uma quitanda  especializada na venda de legumes,
              frutas e verduras, nossos alimentos são retirados da terra e escolhidos a mão
              por nossos funcionários, garantindo a você uma ótima experiência.
            </p>
            <img
              src="/logo.svg"
              alt="Quitanda Saltense"
            />
          </div>
        </section>

        <section className={styles.latestProducts}>
          <h2>Confira nossos produtos:</h2>

          <ul>
            {latestProducts.map((product) => (
              <li key={product.id}>
                <div>
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={200}
                    height={200}
                    objectFit="cover"
                  />
                </div>

                <div className={styles.productDetail}>
                  <p>{product.title}</p>
                  <span>
                    R$
                    {product.price}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <Link href="/products">
            <a>Ver mais</a>
          </Link>
        </section>

        <section className={styles.localization}>
          <div className={styles.localizationInfo}>
            <span>Confira a localização de nossa quitanda</span>
            <h2>Veja se a nossa quitanda está mais próxima de você.</h2>
            <p>
              Quanto mais próximo for o local da sua residência, mais rápido será a entrega.
            </p>

            <Link href="/contact">
              <a>Conferir</a>
            </Link>
          </div>
          <img src="/localization-mockup.png" alt="Localization" />
        </section>

        <section className={styles.latestDepositions}>

          <ul>
            <div className={styles.depositions}>
              <img src="/quotes.png" alt="depositions" />
              <h2>Depoimentos</h2>
            </div>

            {latestDepositions.map((deposition) => (
              <li key={deposition.id}>
                <Image
                  src={deposition.image}
                  alt={deposition.name}
                  width={150}
                  height={150}
                  objectFit="cover"
                />
                <p>{deposition.description}</p>
                <span>{deposition.name}</span>
              </li>
            ))}
          </ul>
        </section>
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

  const depositions = await api.get('depositions');

  const latestProducts = data.slice(0, 4);
  const latestDepositions = depositions.data.slice(0, 4);

  return {
    props: {
      latestProducts,
      latestDepositions,
    },
    revalidate: 60 * 60 * 8, // 8 hours
  };
};
