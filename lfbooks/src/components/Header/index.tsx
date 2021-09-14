import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

export const Header = () => {
   return (
      <header>
         <nav className={`${styles.navbar} container`}>
            <div className={styles.logo}>
               <Link to="/">LF Books</Link>
            </div>
            <div className={styles.menu}>
               <Link to="/about">Sobre</Link>
               <Link to="/contact">Contato</Link>
            </div>
         </nav>
      </header>
   )
}
