// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './Safety.module.css';
import logo1 from '../../assets/professionaltrainer.png';
import logo2 from '../../assets/accilives new logo.png';
import logo3 from '../../assets/Certified Equipment.png';
import { NavLink } from 'react-router-dom';

function Safety() {
    return (
        <div className={styles.containers}>
            <header>
                <h1>
                    leading with <span className={styles.highlight}>SAFETY!</span> in mind
                </h1>
            </header>
            <div className={styles.content}>
                <div className={`${styles.box1} ${styles.image1}`}>
                    <NavLink to="/safety" rel="noopener noreferrer">
                        <img src={logo1} alt="Professional Trainer" className={styles.image} />
                    </NavLink>
                </div>
                <div className={`${styles.box1} ${styles.image1}`}>
                    {/*<div className="letter-i">I</div>*/}
                    {/*<div className="text-container">*/}
                    {/*    <div className="assured">Assured</div>*/}
                    {/*    <div className="insurance">Insurance</div>*/}
                    {/*</div>*/}
                    <p>Powered by</p>
                    <NavLink to="/safety" rel="noopener noreferrer">
                        <img src={logo2} alt="Assured Insurance" className={styles.image} id="img"/>
                    </NavLink>
                </div>
                <div className={styles.box}>
                    <NavLink to="/safety" rel="noopener noreferrer">
                        <img src={logo3} alt="Certified Equipment" className={styles.image} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Safety;
