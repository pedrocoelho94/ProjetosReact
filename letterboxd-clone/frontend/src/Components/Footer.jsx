import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
   return (
      <footer className={styles.footer}>
         <p>Alguns Direitos Reservados</p>
         <p>
            Site inspirado no{' '}
            <a rel="noreferrer" href="https://letterboxd.com/" target="_blank">
               Letterboxd
            </a>
         </p>
      </footer>
   )
}

export default Footer
