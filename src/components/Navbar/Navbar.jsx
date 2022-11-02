import React, {useState} from 'react';
import styles from './Navbar.module.css';
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {
    const [mobile, setMobile] = useState(false);
    return (
            <header>
                <div className={styles.container}>
                    <h1>De<span className='primary'>Fi</span></h1>
                    <ul className={mobile ? [styles.navMenu, styles.ativo].join(' ') : styles.navMenu}>
                        <li>
                            <a href="#hero">Home</a>
                        </li>
                        <li>
                            <a href="#destaque">Destaque</a>
                        </li>
                        <li>
                            <a href="/">Ganhe</a>
                        </li>
                        <li>
                            <a href="/">Contato</a>
                        </li>
                    </ul>
                    <div className={styles.btnGroup}>
                        <button className='btn'>Conectar Carteira</button>
                    </div>
                    <div className={styles.hamburguer} onClick={() => setMobile(!mobile)}>
                        { mobile ? <FaTimes size={20} style={{color: '#333'}}/> : <FaBars size={20} style={{color: '#333'}} />}
                    </div>
                </div>
            </header>
        )
}

export default Navbar