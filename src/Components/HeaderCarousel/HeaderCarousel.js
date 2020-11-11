import React, { useRef } from 'react'
import img1 from './img/img1';
import img2 from './img/img2';
import img3 from './img/img3';
import styles from './HeaderCarousel.module.css'
import chevron from './img/chevron.svg'

const HeaderCarousel = () => {
    let sliderRef = useRef();
    let refDot1 = useRef();
    let refDot2 = useRef();
    let refDot3 = useRef();
    let chevronRight = useRef();
    let chevronLeft = useRef();
    let count = 1;

    const transEnd = () => {
        sliderRef.current.style.transition = 'none'
        if (count === 4) {
            sliderRef.current.style.transform = 'translate(-' + 100 + 'vw)';
            count = 1;
        } else {
            if (count === 0) {
                sliderRef.current.style.transform = 'translate(-' + 3 * 100 + 'vw)';
                count = 3;
            }
        }
    }


    const slide = (n) => {
        count += n;
        if (count > 4) {
            count = 4
        } else {
            if (count < 0) {
                count = 0;
            }
        }
        if (n === 1) {
            chevronRight.current.style.opacity = '1';
            chevronLeft.current.style.opacity = '0.3';
        } else {
            chevronLeft.current.style.opacity = '1';
            chevronRight.current.style.opacity = '0.3';
        }
        setDot(count);
        sliderRef.current.style.transition = 'ease all 0.3s';
        sliderRef.current.style.transform = 'translate(-' + count * 100 + 'vw)';
    }

    const setDot = (n) => {
        refDot1.current.style.background = 'gray';
        refDot2.current.style.background = 'gray';
        refDot3.current.style.background = 'gray';
        switch (n) {
            case 0:
                refDot3.current.style.background = 'white';
                break;
            case 1:
                refDot1.current.style.background = 'white';
                count = 1;
                break;
            case 2:
                refDot2.current.style.background = 'white';
                count = 2;
                break;
            case 3:
                refDot3.current.style.background = 'white';
                count = 3;
                break;
            case 4:
                refDot1.current.style.background = 'white';
                break;
        }
        sliderRef.current.style.transition = 'ease all 0.3s';
        sliderRef.current.style.transform = 'translate(-' + n * 100 + 'vw)';
    }

    return (
        <div className={styles.container}>
            <div className={styles.slider} ref={sliderRef} onTransitionEnd={transEnd}>
                <img src={img3} className={styles.img}></img>
                <img src={img1} className={styles.img}></img>
                <img src={img2} className={styles.img}></img>
                <img src={img3} className={styles.img}></img>
                <img src={img1} className={styles.img}></img>
            </div>
            <div className={styles.slickContainer}>
                <div className={styles.slickDot} ref={refDot1} onClick={() => setDot(1)}></div>
                <div className={styles.slickDot} ref={refDot2} onClick={() => setDot(2)}></div>
                <div className={styles.slickDot} ref={refDot3} onClick={() => setDot(3)}></div>
            </div>
            <img src={chevron} className={styles.chevronLeft} ref={chevronLeft} onClick={() => slide(-1)}></img>
            <img src={chevron} className={styles.chevronRight} ref={chevronRight} onClick={() => slide(+1)}></img>
        </div>
    )
}

export default HeaderCarousel


