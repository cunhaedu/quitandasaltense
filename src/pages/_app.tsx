import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import '../styles/global.scss';
import { CartContextProvider } from '../contexts/cartContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <div>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </CartContextProvider>
  );
}
