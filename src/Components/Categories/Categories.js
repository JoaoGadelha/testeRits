import React from 'react'
import styles from './Categories.module.css'
import background from './img/background'

const Categories = () => {
   
    return (
        <div className={styles.categories}>
            <div className={styles.item}>
                <h2 className={styles.headLine}>Lorem ipsum dolor sit amet, consectetur adipiscing.</h2>
                <img src={background} className={styles.background}></img>
                <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus mauris id magna fermentum euismod.</p>
                <h1 className={styles.h1}>CATEGORIA</h1>
                <div className={styles.overlay} ></div>
            </div>
            <div className={styles.item}>
                <h2 className={styles.headLine}>Lorem ipsum dolor sit amet, consectetur adipiscing.</h2>
                <img src={background} className={styles.background}></img>
                <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus mauris id magna fermentum euismod.</p>
                <h1 className={styles.h1}>CATEGORIA</h1>
                <div className={styles.overlay} ></div>
            </div>
            <div className={styles.item}>
                <h2 className={styles.headLine}>Lorem ipsum dolor sit amet, consectetur adipiscing.</h2>
                <img src={background} className={styles.background}></img>
                <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus mauris id magna fermentum euismod.</p>
                <h1 className={styles.h1}>CATEGORIA</h1>
                <div className={styles.overlay} ></div>
            </div>
        </div>
    )
}

export default Categories