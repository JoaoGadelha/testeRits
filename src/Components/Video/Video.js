import React, { useState, useRef } from 'react'
import styles from './Video.module.css'
import img1 from './img/img1'
import img2 from './img/img2'
import img3 from './img/img3'

const Video = () => {
    let titles = ['Ana e João', 'Carol', 'Venha estudar conosco']
    let [img, setImg] = useState(img1)
    let [videoTitle, setVideoTitle] = useState(titles[0]);
    let refThumbnail1 = useRef();
    let refThumbnail2 = useRef();
    let refThumbnail3 = useRef();
    let refCarousel = useRef();

    const onClickThumbnail = (n) => {

        refThumbnail1.current.style.border = 'solid rgba(0,0,0,0) 3px'
        refThumbnail2.current.style.border = 'solid rgba(0,0,0,0) 3px'
        refThumbnail3.current.style.border = 'solid rgba(0,0,0,0) 3px'

        if (n === 1) {
            setImg(img1);
            setVideoTitle(titles[0]);
            refThumbnail1.current.style.border = 'solid white 3px'
            refCarousel.current.style.transform = 'translateY(0px)';
        }
        if (n === 2) {
            setImg(img2);
            setVideoTitle(titles[1]);
            refThumbnail2.current.style.border = 'solid white 3px'
        }
        if (n === 3) {
            setImg(img3);
            setVideoTitle(titles[2]);
            refThumbnail3.current.style.border = 'solid white 3px'
            refCarousel.current.style.transform = 'translateY(-100px)';
        }

    }

    const upCarousel = () => {
        refCarousel.current.style.transform = 'translateY(-100px)';
    }

    const downCarousel = () => {
        refCarousel.current.style.transform = 'translateY(0px)';


    }

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <h1 className={styles.title}>Trilhas de conhecimento</h1>
                <p className={styles.p}>{videoTitle}</p>
                <div className={styles.videoFrame}>
                    <img src={img} className={styles.video}></img>
                    <div className={styles.carousel} ref={refCarousel}>
                        <img src={img1} onClick={() => onClickThumbnail(1)} className={styles.thumbnail} ref={refThumbnail1}></img>
                        <img src={img2} onClick={() => onClickThumbnail(2)} className={styles.thumbnail} ref={refThumbnail2}></img>
                        <img src={img3} onClick={() => onClickThumbnail(3)} className={styles.thumbnail} ref={refThumbnail3}></img>
                    </div>
                    <div className={styles.upChevron} onClick={upCarousel}>+</div>
                    <div className={styles.downChevron} onClick={downCarousel}>-</div>
                </div>
            </div>
        </div>
    )
}

export default Video