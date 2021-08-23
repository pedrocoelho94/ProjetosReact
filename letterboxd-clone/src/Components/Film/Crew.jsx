import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Crew.module.css'

const Crew = ({ crew }) => {
   function selectJob(job, link) {
      return (
         <ul>
            {crew.crew
               .filter(item => item.job === job)
               .map(item => (
                  <Link key={`${link}-${item.id}`} to={`/../../${link}/${item.id}`}>
                     {' '}
                     <li className={styles.crew}>{item.name}</li>
                  </Link>
               ))}
         </ul>
      )
   }

   function selectDepartament(job, link) {
      return (
         <ul>
            {crew.crew
               .filter(item => item.department === job)
               .map(item => (
                  <Link key={`${link}-${item.id}`} to={`/../../${link}/${item.id}`}>
                     {' '}
                     <li title={item.character} className={styles.crew}>
                        {item.name}
                     </li>
                  </Link>
               ))}
         </ul>
      )
   }

   if (!crew) return null
   return (
      <div>
         <div className={styles.role}>
            <h4>Direção</h4>
            {selectJob('Director', 'director')}
         </div>
         <div className={styles.role}>
            <h4>Produção</h4>
            {selectDepartament('Production', 'producer')}
         </div>

         <div className={styles.role}>
            <h4>Roteiro</h4>
            {selectDepartament('Writing', 'writer')}
         </div>

         <div className={styles.role}>
            <h4>Edição</h4>
            {selectJob('Editor', 'editor')}
         </div>

         <div className={styles.role}>
            <h4>Cinematografia</h4>
            {selectJob('Director of Photography', 'cinematography')}
         </div>

         <div className={styles.role}>
            <h4>Design de Produção</h4>
            {selectJob('Production Design', 'production-design')}
         </div>

         <div className={styles.role}>
            <h4>Arte</h4>
            {selectDepartament('Art', 'art-direction')}
         </div>

         <div className={styles.role}>
            <h4>Decoração</h4>
            {selectJob('Set Decoration', 'set-decoration')}
         </div>

         <div className={styles.role}>
            <h4>Efeitos Visuais</h4>
            {selectJob('Visual Effects Supervisor', 'visual-effects')}
         </div>

         <div className={styles.role}>
            <h4>Compositor</h4>
            {selectJob('Original Music Composer', 'composer')}
         </div>

         <div className={styles.role}>
            <h4>Figurino</h4>
            {selectJob('Costume Design', 'costumes')}
         </div>

         <div className={styles.role}>
            <h4>Maquiagem</h4>
            {selectJob('Makeup Artist', 'make-up')}
         </div>
      </div>
   )
}

export default Crew
