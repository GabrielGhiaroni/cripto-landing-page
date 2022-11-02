import React, {useState} from 'react';
import styles from './Navbar.module.css';
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {
    const [mobile, setMobile] = useState(false);
    return (
            <header>
                <div className={styles.container}>
                    <a href="#hero"><h1>De<span className='primary'>Fi</span></h1></a>
                    <ul className={mobile ? [styles.navMenu, styles.ativo].join(' ') : styles.navMenu}>
                        <li>
                            <a href="#hero" onClick={() => setMobile(!mobile)}>Home</a>
                        </li>
                        <li>
                            <a href="#destaque" onClick={() => setMobile(!mobile)}>Destaque</a>
                        </li>
                        <li>
                            <a href="#inscrevaSe" onClick={() => setMobile(!mobile)}>Inscreva-se</a>
                        </li>
                        <li>
                            <a href="#footer" onClick={() => setMobile(!mobile)}>Contato</a>
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