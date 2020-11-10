import React, { useState } from 'react'
import styles from './Video.module.css'
import img1 from './img/img1'
import img2 from './img/img2'
import img3 from './img/img3'

const Video = () => {
    let titles = ['Ana e João', 'Carol', 'Venha estudar conosco']    
    let [img, setImg] = useState(img1)
    let [videoTitle, setVideoTitle] = useState(titles[0]);

    const setVideoImg = (n) => {
        if (n === 1) {
            setImg(img1);
            setVideoTitle(titles[0]);
        }
        if (n === 2) {
            setImg(img2);
            setVideoTitle(titles[1]);
        }
        if (n === 3) {
            setImg(img3);
            setVideoTitle(titles[2]);
        }
    }

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <h1 className={styles.title}>Trilhas de conhecimento</h1>
                <img src={img} className={styles.video}></img>
                <p className={styles.p}>{videoTitle}</p>
                <div className={styles.carousel}>
                    <img src={img1} onClick={() => setVideoImg(1)} className={styles.thumbnail}></img>
                    <img src={img2} onClick={() => setVideoImg(2)} className={styles.thumbnail}></img>
                    <img src={img3} onClick={() => setVideoImg(3)} className={styles.thumbnail}></img>
                </div>
            </div>
        </div>
    )
}

export default Video