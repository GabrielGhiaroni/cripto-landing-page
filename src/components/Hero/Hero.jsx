import React from 'react';
import styles from './Hero.module.css';
import HeroImage from '../../assets/hero-img.png';

const Hero = () => {
  return (
    <section id='hero'>
        <div className={styles.container}>
            <div className={styles.hero__left}>
                <p>Compra & Venda de Criptomoedas 24h</p>
                <h1>Invista na moeda <span style={{color: 'var(--primary)'}}>certa</span>, na hora <span style={{color: 'var(--primary)'}}>certa</span>.</h1>
                <div className={styles.hero__left__input}>
                    <input type="email" placeholder="Insira seu e-mail" />
                    <button className='btn'>Saiba mais</button>
                </div>
            </div>

            <div className={styles.hero__right}>
                <div className={styles.hero__right__imagem}>
                    <img src={HeroImage} alt="dashboard criptomoedas" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero;