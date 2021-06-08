import Head from 'next/head';
import styles from './contact.module.scss';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contato | Quitanda Saltense</title>
      </Head>

      <div className={styles.bunner}>
        <h1>Entre em contato conosco</h1>
      </div>

      <main className={styles.main}>
        <section className={styles.contactInfo}>
          <h2>Informações de contato</h2>
          <p>
            Vocẽ pode fazer suas compras ou tirar qualquer dúvida entando em
            contato conosco através do nosso telefone:
            <span> (11)98833-9988</span>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
