import React, { useRef, useEffect } from 'react'
import styles from './Thumbnail.module.css'

const Thumbnail = ({ image, activeThumb, thumbID }) => {

    let refThumb = useRef();
    let refPointer = useRef();

    useEffect(() => {
        updateThumb();
    }, [activeThumb])

    const updateThumb = () => {
        if (activeThumb === thumbID) {
            refThumb.current.style.border = 'solid white 3px'
            refPointer.current.style.borderColor = 'white';
            refPointer.current.style.borderLeft = 'solid rgba(0,0,0,0) 10px';
            refPointer.current.style.borderTop = 'solid rgba(0,0,0,0) 10px';
            refPointer.current.style.borderBottom = 'solid rgba(0,0,0,0) 10px';
        } else {
            refThumb.current.style.border = 'solid rgba(0,0,0,0) 3px'
            refPointer.current.style.borderColor = 'rgba(0,0,0,0)';
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.thumbnail} ref={refThumb}>
                <img src={image} className={styles.image}></img>
            </div>
            <div className={styles.pointer} ref={refPointer}></div>
        </div>
    )

}

export default Thumbnail