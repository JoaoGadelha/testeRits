import React, { useState, useRef } from 'react'
import styles from './Video.module.css'
import chevron from './img/chevron.svg'
import img1 from './img/img1'
import img2 from './img/img2'
import img3 from './img/img3'
import Thumbnail from './Thumbnail/Thumbnail'

const Video = () => {
    let titles = ['Ana e João', 'Carol', 'Venha estudar conosco']
    let [img, setImg] = useState(img1)
    let [videoTitle, setVideoTitle] = useState(titles[0]);
    let [activeThumb, setActiveThumb] = useState(1);
    let refBackground = useRef();
    let refScrollBar = useRef();
    let refCarousel = useRef();
    let refPointer = useRef();

    const onClick = (n) => {
        setActiveThumb(n);
        if (n === 1) {
            setImg(img1);
            setVideoTitle(titles[0]);
            refCarousel.current.style.transform = 'translateY(0px)';
            refScrollBar.current.style.top = '0px';
        }
        if (n === 2) {
            setImg(img2);
            setVideoTitle(titles[1]);
            if (activeThumb === 1) {
                refScrollBar.current.style.top = '50px';
            } else {
                refCarousel.current.style.transform = 'translateY(0px)';
                refScrollBar.current.style.top = '20px';
            }
        }
        if (n === 3) {
            setImg(img3);
            setVideoTitle(titles[2]);
            if (refBackground.current.style.width > 800) {
                refCarousel.current.style.transform = 'translateY(-100px)';
            }
            refScrollBar.current.style.top = '100px';
        }


    }

    const upCarousel = () => {
        refCarousel.current.style.transform = 'translateY(0px)';
        refScrollBar.current.style.top = '0px';

    }

    const downCarousel = () => {
        refCarousel.current.style.transform = 'translateY(-100px)';
        refScrollBar.current.style.top = '100px';

    }



    return (
        <div className={styles.background} ref={refBackground}>
            <div className={styles.container}>
                <h1 className={styles.title}>Trilhas de conhecimento</h1>
                <p className={styles.p}>{videoTitle}</p>
                <div className={styles.videoFrame}>
                    <img src={img} className={styles.video}></img>
                    <div className={styles.carousel} ref={refCarousel}>
                        <div onClick={() => onClick(1)}>
                            <Thumbnail image={img1} activeThumb={activeThumb} thumbID={1} />
                        </div>
                        <div onClick={() => onClick(2)}>
                            <Thumbnail image={img2} activeThumb={activeThumb} thumbID={2} />
                        </div>
                        <div onClick={() => onClick(3)}>
                            <Thumbnail image={img3} activeThumb={activeThumb} thumbID={3} />
                        </div>
                    </div>
                    <div className={styles.scrollBar} ref={refScrollBar}></div>
                </div>
                <img className={styles.upChevron} onClick={upCarousel} src={chevron}></img>
                <img className={styles.downChevron} onClick={downCarousel} src={chevron}></img>
            </div>
        </div>
    )
}

export default Video