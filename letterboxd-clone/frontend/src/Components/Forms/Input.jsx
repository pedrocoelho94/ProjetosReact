import React from 'react'
import styles from './Input.module.css'

const Input = ({ error, name, label, type, onChange, value, onBlur }) => {
   return (
      <div className={styles.wrapper}>
         <label className={styles.label} htmlFor={name}>
            {label}
         </label>
         <input
            className={styles.input}
            id={name}
            name={name}
            type={type}
            onChange={onChange}
            value={value}
            onBlur={onBlur}
         />
         {error && <p className={styles.error}>{error}</p>}
      </div>
   )
}

export default Input
