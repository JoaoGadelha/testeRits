import React from 'react';
import Accordion from './Accordion/Accordion'
import styles from './FAQ.module.css'

const FAQ = () => {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <h1 className={styles.h1}>Perguntas Frequentes</h1>
                <div className={styles.accordionContainer}>
                    <Accordion title='At ero eos et accusamus et iusto?' 
                    contentTitle='Lorem ipsum dolor sit amet.' 
                    content='Frequently asked question (FAQ) pages (or hubs)
                     help your business respond to the needs of your audience
                      more quickly and appropriately.' />
                    <Accordion title='Lorem ipsum dolor sit amet,
                     consectetur adipiscing elit. Maecenas blandit
                      odio vitae diam tincidunt mattis. In bibendum blandit.' 
                      contentTitle='Lorem ipsum dolor sit amet.' 
                      content='Lorem ipsum dolor sit amet, consectetur adipiscing
                       elit. Maecenas blandit odio vitae diam tincidunt mattis.
                        In bibendum blandit.' />
                    <Accordion title='At ero eos et accusamus et iusto?'
                        contentTitle='Lorem ipsum dolor sit amet.'
                        content='In fact, an FAQ page is an essential
                         webpage to have on your site.<br><br>'/>
                </div>
            </div>
        </div>
    )
}

export default FAQ