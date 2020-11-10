import React from 'react'
import styles from './HeaderMenu.module.css'
import logo from './img/logo'

const HeaderMenu = () => {
    return (
        <div className={styles.headerMenu}>
            <img src={logo} className={styles.logo}></img>
            <ul className={styles.menuBar}>
                <li>Menu 1</li>
                <li>Menu 2</li>
                <li>Menu 3</li>
            </ul>
        </div>
    )
}

export default HeaderMenu