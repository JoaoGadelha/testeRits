import React, { useRef, useState, useEffect } from 'react'
import styles from './Accordion.module.css'
import chevron from '../img/chevron.svg'
import chevronGreen from '../img/chevronGreen.svg'


const Accordion = (props) => {

    let refContent = useRef();
    let refChevron = useRef();
    let [isOpened, setIsOpened] = useState(true);

    const onClick = () => {
        setIsOpened(!isOpened);
        if (isOpened) {
            refContent.current.style.maxHeight = refContent.current.scrollHeight+'px';
        } else {
            refContent.current.style.maxHeight = '0px'
        }
    }


    return (
        <div className={styles.section}>
            <button className={styles.accordion} onClick={onClick}>
                < p className={styles.title}>{props.title}</p>
            </button>
            <div className={styles.content} ref={refContent}>
                <div className={styles.contentTitle}>{props.contentTitle}</div>
                <div className={styles.text}
                    dangerouslySetInnerHTML={{ __html: props.content }} />
                <img src={chevronGreen} className={styles.chevronGreen} onClick={onClick}></img>
            </div>
            <img src={chevron} className={styles.chevron} onClick={onClick}></img>
        </div>
    )
}

export default Accordion