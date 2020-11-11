import React, {useEffect} from 'react'
import styles from './AboutCarousel.module.css'
import CarouselItem from './CarouselItem/CarouselItem'

const AboutCarousel = () => {
    let numItems = 12; // number of items in the carousel
    let numsArray = []; // stores a number to identify each item

    useEffect(() => {
        for (let i = 0; i < numItems; i++) {
            numsArray[i] = i;
        }
        console.log(numsArray);
    })
    return (
        <div className={styles.background}>
            <h1 className={styles.title}>Como funciona?</h1>
            <div className={styles.carousel}>
                {numsArray.map(num => <CarouselItem number={num} />)}
            </div>
        </div>
    )
}

export default AboutCarousel