import Head from 'next/head';
import Image from 'next/image';
import styles from './about.module.scss';

export default function About() {
  return (
    <div>
      <Head>
        <title>Sobre | Quitanda Saltense</title>
      </Head>

      <div className={styles.bunner}>
        <h1>Sobre nós</h1>
      </div>

      <main className={styles.main}>
        <section className={styles.about}>
          <h2>Sobre nós</h2>

          <div>
            <p>
              Somos a Quitanda Saltense, uma quitanda  especializada na venda
              de legumes, frutas e verduras, nossos alimentos são retirados da
              terra e escolhidos a mão por nossos funcionários, garantindo a você uma
              ótima experiência.
            </p>
            <img
              src="/logo.svg"
              alt="Quitanda Saltense"
            />
          </div>
        </section>

        <section className={styles.values}>
          <h2>Nossos valores</h2>

          <ul>
            <li style={{ background: '#72BCCC' }}>Bom atendimento</li>
            <li style={{ background: '#C3C3C3' }}>Igualdade</li>
            <li style={{ background: '#CD8383' }}>Qualidade</li>
            <li style={{ background: '#7CC290' }}>Preocupação com a natureza</li>
            <li style={{ background: '#B57DC9' }}>Inovação</li>
            <li style={{ background: '#323232' }}>Atenção</li>
          </ul>
        </section>

        <section className={styles.adaptations}>
          <h2>Adaptações</h2>
          <span>
            Com a chegada da pandemia causada pelo novo coronavírus,
            nossa quitanda passou por algumas adaptações e adotou novos
            protocolos com o objetivo de garantir segurança e conforto aos clientes.
          </span>

          <ul>
            <li>
              <Image
                src="https://images.unsplash.com/photo-1618239810513-b8a377793022"
                alt="Prevenções"
                width={200}
                height={200}
                objectFit="cover"
              />
            </li>
            <li>
              <Image
                src="https://images.unsplash.com/photo-1585417239725-00feea715e12"
                alt="Prevenções"
                width={200}
                height={200}
                objectFit="cover"
              />
            </li>
            <li>
              <Image
                src="https://images.unsplash.com/photo-1593131492215-67b479a3d915"
                alt="Prevenções"
                width={200}
                height={200}
                objectFit="cover"
              />
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
