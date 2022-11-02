import React from 'react';
import styles from './Footer.module.css';
import {AiOutlineGlobal, AiFillGithub} from 'react-icons/ai';
import {BsLinkedin, BsWhatsapp} from 'react-icons/bs';

const Footer = () => {
  return (
    <section id='footer' className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.coluna1}>
                <h1>De<span className='primary'>Fi</span></h1>
            </div>

            <div className={styles.coluna}>
                <h5>Ajuda</h5>
                <span className={styles.bar}></span>
                    <a href="#hero">Fale conosco</a>
                    <a href="#hero">Chat</a>
                    <a href="#hero">Central</a>
                    <a href="#hero">FAQ</a>
            </div>

            <div className={styles.coluna}>
                <h5>Sobre nós</h5>
                <span className={styles.bar}></span>
                    <a href="#hero">Assessoria</a>
                    <a href="#hero">Privacidade</a>
                    <a href="#hero">Jurídico</a>
                    <a href="#hero">Marketing</a>
            </div>

            <div className={styles.coluna}>
                <h5>Endereço</h5>
                <span className={styles.bar}></span>
                    <ul>
                        <li>Rua Vinte, 13</li>
                        <li>Botafogo</li>
                        <li>RJ City</li>
                        <li>22220-901</li>
                    </ul>
            </div>

            <div className={styles.coluna}>
                <h5>Desenvolvedor</h5>
                <span className={styles.bar}></span>
                    <ul>
                        <li><a href="https://gabrielghiaroni.com/"><AiOutlineGlobal/>Site</a></li>
                        <li><a href="https://www.linkedin.com/in/gabrielghiaroni/"><BsLinkedin/>Linkedin</a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=5521983617775&text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20estou%20interessado%20em%20algum%20servi%C3%A7o."><BsWhatsapp/>WhatsApp</a></li>
                        <li><a href="https://github.com/GabrielGhiaroni"><AiFillGithub/>GitHub</a></li>
                    </ul>
            </div>
        </div>
    </section>
  )
}

export default Footer;