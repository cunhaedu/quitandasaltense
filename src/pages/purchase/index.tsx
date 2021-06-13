import axios from 'axios';
import Link from 'next/link';
import { ChangeEvent, useEffect, useState } from 'react';
import { useCart } from '../../contexts/cartContext';
import styles from './purchase.module.scss';

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

export default function Purchase() {
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  const { total } = useCart();

  useEffect(() => {
    axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => {
        const ufInitials = response.data.map(uf => uf.sigla);

        setUfs(ufInitials);
      });
  }, []);

  useEffect(() => {
    if (selectedUf === '0') {
      return;
    }

    axios
      .get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then(response => {
        const cityNames = response.data.map(city => city.nome);

        setCities(cityNames);
      });
  }, [selectedUf]);

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;

    setSelectedUf(uf);
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;

    setSelectedCity(city);
  }

  return (
    <div className="purchasePage">
      <form className={styles.purchaseForm}>
        <h1>Realizar compra</h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>
        </fieldset>

        <div className={styles.field}>
          <label htmlFor="name">Nome completo</label>
          <input
            type="text"
            name="name"
            id="name"
          />
        </div>

        <div className={styles.fieldGroup}>
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="whatsapp">Telefone</label>
            <input
              type="text"
              name="whatsapp"
              id="whatsapp"
            />
          </div>
        </div>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
          </legend>
        </fieldset>

        <div className={styles.field}>
          <label htmlFor="street">Endereço</label>
          <input
            type="text"
            name="street"
            id="street"
          />
        </div>

        <div className={styles.fieldGroup}>
          <div className={styles.field}>
            <label htmlFor="uf">Estado</label>
            <select
              name="uf"
              id="uf"
              value={selectedUf}
              onChange={handleSelectUf}
            >
              <option value="0">Selecione o seu Estado</option>
              {ufs.map(uf => (
                <option key={uf} value={uf}>{uf}</option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="city">Cidade</label>
            <select
              name="city"
              id="city"
              value={selectedCity}
              onChange={handleSelectCity}
            >
              <option value="0">Selecione sua cidade</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>

        <fieldset>
          <legend>
            <h2>Método de pagamento</h2>
          </legend>
        </fieldset>

        <div className={styles.fieldCheck}>
          <input type="radio" id="money" name="payment" value="money" />
          <label htmlFor="money"> Dinheiro</label>

          <input type="radio" id="debt" name="payment" value="debt" />
          <label htmlFor="debt"> Débito</label>

          <input type="radio" id="credit" name="payment" value="credit" />
          <label htmlFor="credit"> Crédito</label>
        </div>

        <fieldset>
          <legend>
            <h2>
              Total da compra:
              {' '}
              {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </h2>
          </legend>
        </fieldset>

        <Link href="/purchase-success">
          <button type="button">Finalizar compra</button>
        </Link>
      </form>
    </div>
  );
}
