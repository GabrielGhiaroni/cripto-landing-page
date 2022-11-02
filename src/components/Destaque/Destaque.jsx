import React, {useState, useEffect} from 'react';
import styles from './Destaque.module.css';
import {FiArrowUp, FiArrowDown} from 'react-icons/fi'
import axios from 'axios';

const Destaque = () => {

  const [dados, setDados] = useState(null);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=6&page=1&sparkline=false';

  useEffect(() => {
    axios.get(url).then((response) => {
      setDados(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, []);

  console.log(dados)

  if(!dados) return null;

  return (
    <section id='destaque' className={styles.destaque}>
      <div className={styles.destaque__container}>
        <div className={styles.destaque__left}>
            <h2>Explore as principais moedas, como Bitcoin, Ethereum e Dogecoin</h2>
            <p>Acompanhe valores em <span style={{color: 'var(--primary)'}}>tempo real</span></p>
            <button className="btn">Ver mais moedas</button>
        </div>
        <div className={styles.destaque__right}>
          <div className={styles.destaque__right__card}>
            <div className="imagem-moeda">
              <img src={dados[0].image} alt=""/>
            </div>
            <div>
              <h5>{dados[0].name}</h5>
              <p>R${dados[0].current_price.toLocaleString()}</p>
            </div>
            {dados[0].price_change_percentage_24h < 0 ? (
              <span className={styles.vermelho}>
                <FiArrowDown />
                {dados[0].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className={styles.verde}>
                <FiArrowUp />
                {dados[0].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          <div className={styles.destaque__right__card}>
            <div className="imagem-moeda">
              <img src={dados[1].image} alt=""/>
            </div>
            <div>
              <h5>{dados[1].name}</h5>
              <p>R${dados[1].current_price.toLocaleString()}</p>
            </div>
            {dados[1].price_change_percentage_24h < 0 ? (
              <span className={styles.vermelho}>
                <FiArrowDown />
                {dados[1].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className={styles.verde}>
                <FiArrowUp />
                {dados[1].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          <div className={styles.destaque__right__card}>
            <div className="imagem-moeda">
              <img src={dados[2].image} alt=""/>
            </div>
            <div>
              <h5>{dados[2].name}</h5>
              <p>R${dados[2].current_price.toLocaleString()}</p>
            </div>
            {dados[2].price_change_percentage_24h < 0 ? (
              <span className={styles.vermelho}>
                <FiArrowDown />
                {dados[2].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className={styles.verde}>
                <FiArrowUp />
                {dados[2].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          <div className={styles.destaque__right__card}>
            <div className="imagem-moeda">
              <img src={dados[3].image} alt=""/>
            </div>
            <div>
              <h5>{dados[3].name}</h5>
              <p>R${dados[3].current_price.toLocaleString()}</p>
            </div>
            {dados[3].price_change_percentage_24h < 0 ? (
              <span className={styles.vermelho}>
                <FiArrowDown />
                {dados[3].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className={styles.verde}>
                <FiArrowUp />
                {dados[3].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          <div className={styles.destaque__right__card}>
            <div className="imagem-moeda">
              <img src={dados[4].image} alt=""/>
            </div>
            <div>
              <h5>{dados[4].name}</h5>
              <p>R${dados[4].current_price.toLocaleString()}</p>
            </div>
            {dados[4].price_change_percentage_24h < 0 ? (
              <span className={styles.vermelho}>
                <FiArrowDown />
                {dados[4].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className={styles.verde}>
                <FiArrowUp />
                {dados[4].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          <div className={styles.destaque__right__card}>
            <div className="imagem-moeda">
              <img src={dados[5].image} alt=""/>
            </div>
            <div>
              <h5>{dados[5].name}</h5>
              <p>R${dados[5].current_price.toLocaleString()}</p>
            </div>
            {dados[5].price_change_percentage_24h < 0 ? (
              <span className={styles.vermelho}>
                <FiArrowDown />
                {dados[5].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className={styles.verde}>
                <FiArrowUp />
                {dados[5].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Destaque;