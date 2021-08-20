import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import Logo from '../../Assets/letterboxd-logo.svg'
import Search from './Search'

const Header = () => {
   return (
      <header className={styles.header}>
         <nav className="container">
            <div className={styles.logo}>
               <Link to="/">
                  <img src={Logo} alt="" />
               </Link>
            </div>
            <div className={styles.menu}>
               <Link to="/">Home</Link>
               <Link to="/profile">Profile</Link>
               <Search />
            </div>
         </nav>
      </header>
   )
}

export default Header
