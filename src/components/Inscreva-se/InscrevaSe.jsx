import React from 'react';
import styles from './InscrevaSe.module.css';
import PhoneScreen from '../../assets/trade.png';

const InscrevaSe = () => {
  return (
    <section id='inscrevaSe' className={styles.inscrevaSe}>
        <div className="container">
            <div className={styles.inscrevaSe__left}>
                <img src={PhoneScreen} alt="tela celular" />
            </div>

            <div className={styles.inscrevaSe__right}>
                <h2>Construa uma nova <span style={{color: 'var(--primary)'}}>fonte de renda</span></h2>
                <p>através de diversos ativos.</p>
                <div className={styles.inscrevaSe__right__inputContainer}>
                    <input type="email" placeholder="Insira seu e-mail"/>
                    <button className="btn">Saiba mais</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default InscrevaSe;