import React from 'react'
import { NavLink } from 'react-router-dom'


import styles from './FilmHeader.module.css'

const FilmHeader = ({id}) => {
   return (
      <>
      <nav className={styles.nav}>
         <NavLink to={`/${id}`} end activeClassName={styles.active}>
            <h3>Elenco</h3>
         </NavLink>

         <NavLink to={`/${id}/crew`} activeClassName={styles.active}>
            <h3>Equipe Técnica</h3>
         </NavLink>

         <NavLink to={`/${id}/details`} activeClassName={styles.active}>
            <h3>Detalhes</h3>
         </NavLink>

         <NavLink to={`/${id}/genres`} activeClassName={styles.active}>
            <h3>Gênero</h3>
         </NavLink>
      </nav>
      </>
   )
}

export default FilmHeader
