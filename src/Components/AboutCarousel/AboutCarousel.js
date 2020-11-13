import React, { useEffect, useState, useRef } from 'react'
import styles from './AboutCarousel.module.css'
import CarouselItem from './CarouselItem/CarouselItem'
import chevronGray from './img/chevronGray.svg'
import chevronGreen from './img/chevronGreen.svg'

const AboutCarousel = () => {
    let numItems = 12; // number of items in the carousel
    let [numsArray, setNumsArray] = useState([]); // stores a number to identify each item
    let [linkText, setLinkText] = useState('LINK')
    let refCarousel = useRef();
    let refCarouselContainer = useRef();
    let refRightBtn = useRef();
    let refLeftBtn = useRef();
    let refLink = useRef();
    let refRightBtnBorder = useRef();
    let refLeftBtnBorder = useRef();
    let refDot1 = useRef();
    let refDot2 = useRef();
    let refDot3 = useRef();
    let refDot4 = useRef();
    let count = 0;

    useEffect(() => {
        let auxNumsArray = [];
        for (let i = 0; i < numItems; i++) {
            auxNumsArray[i] = i + 1;
        }
        setNumsArray(auxNumsArray);
        refLeftBtnBorder.current.style.boxShadow = '0 0 0';
        refDot1.current.style.background = '#4eef61';
    }, [])

    const mouseEnter = () => {
        console.log(linkText)
        setLinkText('VER REGULAMENTO')
    }

    const mouseLeave = () => {
        console.log(linkText)
        setLinkText('LINK')
    }

    const updateBtn = (n) => {
        if (n < 0) { // right button was clicked
            refLeftBtnBorder.current.style.boxShadow = '0 10px 20px #0000001A';
            refRightBtnBorder.current.style.boxShadow = 'none';
            refLeftBtn.current.src = chevronGreen;
            refRightBtn.current.src = chevronGray;
            refRightBtn.current.style.transform = 'rotate(-90deg)';
            refLeftBtn.current.style.transform = 'rotate(-90deg)';
        } else {
            refRightBtnBorder.current.style.boxShadow = '0 10px 20px #0000001A';
            refLeftBtnBorder.current.style.boxShadow = 'none';
            refRightBtn.current.src = chevronGreen;
            refLeftBtn.current.src = chevronGray;
            refLeftBtn.current.style.transform = 'rotate(90deg)';
            refRightBtn.current.style.transform = 'rotate(90deg)';
        }

    }

    const updateDot = (count) => {
        refDot1.current.style.background = '#d3fbd7';
        refDot2.current.style.background = '#d3fbd7';
        refDot3.current.style.background = '#d3fbd7';
        refDot4.current.style.background = '#d3fbd7';
        switch (count) {
            case 0:
                refDot1.current.style.background = '#4eef61';
                count = 0;
                break;
            case 1:
                refDot2.current.style.background = '#4eef61';
                count = 1;
                break;
            case 2:
                refDot3.current.style.background = '#4eef61';
                count = 2;
                break;
            case 3:
                refDot4.current.style.background = '#4eef61';
                count = 3;
                break;
        }
        refCarousel.current.style.transition = 'ease all 0.3s';
        refCarousel.current.style.transform = 'translate(-' + (count * (1110 + 60)) + 'px)';
    }

    const slide = (n) => {
        count += n;
        if (count > 3) {
            count = 3
        } else {
            if (count < 0) {
                count = 0;
            }
        }
        updateDot(count);
        updateBtn(n);
        refCarousel.current.style.transition = 'ease all 0.3s';
        refCarousel.current.style.transform = 'translate(-' + (count * (1110 + 60)) + 'px)';
    }

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <h1 className={styles.title}>Como funciona?</h1>
                <div className={styles.carouselContainer} ref={refCarouselContainer}>
                    <div className={styles.carousel} ref={refCarousel}>
                        {numsArray.map(num => <CarouselItem number={num} />)}
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <div className={styles.btnBorder} onClick={() => slide(-1)} ref={refLeftBtnBorder}><img className={styles.leftBtn} src={chevronGray} ref={refLeftBtn}></img></div>
                    <div className={styles.btnBorder} onClick={() => slide(+1)} ref={refRightBtnBorder}><img className={styles.rightBtn} src={chevronGreen} ref={refRightBtn}></img></div>
                </div>
                <div className={styles.slickDotsContainer}>
                    <div className={styles.dot} onClick={() => updateDot(0)} ref={refDot1}></div>
                    <div className={styles.dot} onClick={() => updateDot(1)} ref={refDot2}></div>
                    <div className={styles.dot} onClick={() => updateDot(2)} ref={refDot3}></div>
                    <div className={styles.dot} onClick={() => updateDot(3)} ref={refDot4}></div>
                </div>
                <div className={styles.link} ref={refLink} onMouseEnter={() => mouseEnter()} onMouseLeave={() => mouseLeave()}>
                    {linkText}
                </div>
            </div>
        </div>
    )
}

export default AboutCarousel