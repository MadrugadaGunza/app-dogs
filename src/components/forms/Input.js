import styles from './Input.module.css';
import React from 'react';

const Input = ({ type, label, id, name, placeholder, value, onChange }) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={id} className={styles.label}>{label}</label>
            <input
                className={styles.input}
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                value={value} onChange={onChange}
            />
        </div>
    )
}

export default Input
