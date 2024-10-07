import styles from './NotFound.module.css';
import React from 'react'

const NotFound = () => {
    return (
        <section className={styles.page}>
            <h1 className='title-error'>Erro, página não encontrada :(</h1>
        </section>
    )
}

export default NotFound
