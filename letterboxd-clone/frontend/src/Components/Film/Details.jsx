import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Details.module.css'

const Details = ({ details }) => {
   function studios(link) {
      return (
         <ul>
            {details.production_companies.map(item => (
               <Link key={item.name} to={`/../../${link}/${item.id}`}>
                  {' '}
                  <li className={styles.info}>{item.name}</li>
               </Link>
            ))}
         </ul>
      )
   }

   function languages(link) {
      return (
         <ul>
            {details.spoken_languages.map(item => (
               <Link
                  key={item.name}
                  to={`/../${link}/${item.english_name.toLowerCase()}`}
               >
                  {' '}
                  <li className={styles.info}>{item.english_name}</li>
               </Link>
            ))}
         </ul>
      )
   }

   if (!details) return null
   return (
      <div className={styles.details}>
         <div className={styles.role}>
            <h4>Estúdios</h4>
            {studios('studio')}
         </div>

         <div className={styles.role}>
            <h4>Idiomas</h4>
            {languages('language')}
         </div>
      </div>
   )
}

export default Details
