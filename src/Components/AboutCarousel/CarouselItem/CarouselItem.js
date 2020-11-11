import React from 'react'
import styles from './CarouselItem.module.css'

const CarouselItem = (props) => {
    let number = props.number;
    return (
        <div className={styles.item}>{number}</div>
    )
}

export default CarouselItem