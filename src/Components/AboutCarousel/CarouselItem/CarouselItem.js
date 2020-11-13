import React, { useRef , useEffect } from 'react'
import styles from './CarouselItem.module.css'
import image from '../img/logo.png'

const CarouselItem = (props) => {
    let refNumber = useRef();
    let number = props.number;

    useEffect(()=>{
        if (number >= 10) {
            refNumber.current.style.left = '10px'
        }
    }, [])
    

    return (
        <div className={styles.item}>
            <div className={styles.numberContainer}>
                <p className={styles.number} ref={refNumber}>
                    {number}
                </p>
            </div>
            <div className={styles.content}>
                <img className={styles.image} src={image}></img>
                <div className={styles.text}>Lorem ipsum dolor sit amet, consectetur.</div>
            </div>
        </div>
    )
}

export default CarouselItem