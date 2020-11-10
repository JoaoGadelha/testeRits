import React from 'react'
import styles from './Footer.module.css'
import logo from './img/logo'
import facebook from './img/facebook.svg'
import twitter from './img/twitter.svg'
import instagram from './img/instagram.svg'
import linkedin from './img/linkedin.svg'
import youtube from './img/youtube.svg'

const Footer = () => {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <img src={logo} className={styles.logo}></img>
                <div className={styles.logoContainer}>
                    <img src={facebook}></img>
                    <img src={twitter}></img>
                    <img src={instagram}></img>
                    <img src={linkedin}></img>
                    <img src={youtube}></img>
                </div>
                <p className={styles.p1}>Copyright &#xa9; - Rits Tecnologia . Todos os direitos reservados .</p>
                <p className={styles.p2}>rits</p>
            </div>
        </div>
    )
}

export default Footer