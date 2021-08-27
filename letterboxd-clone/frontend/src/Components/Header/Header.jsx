import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import Logo from '../../Assets/letterboxd-logo.svg'
import Search from './Search'
import { UserContext } from '../../DataContext'

const Header = () => {
   const { user, userLogout} = React.useContext(UserContext)

   return (
      <header className={styles.header}>
         <nav className="container">
            <div className={styles.logo}>
               <Link to="/">
                  <img src={Logo} alt="" />
               </Link>
            </div>
            <div className={styles.menu}>
               {user ? (
                  <Link to="/profile">{user.username}</Link>
               ) : (
                  <Link to="/login">Login</Link>
               )}
               {user ? <button onClick={userLogout}>Logout</button> : ''}
               <Link to="/films">Filmes</Link>
               <Search />
            </div>
         </nav>
      </header>
   )
}

export default Header
