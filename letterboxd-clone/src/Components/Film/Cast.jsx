import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Cast.module.css'

const Cast = ({ cast }) => {
   if (!cast) return null

   return (
      <ul className={styles.cast}>
         {cast.cast.map(actor => (
            <Link key={actor.id} to={`/actor/${actor.id}`}>
               <li title={actor.character} className={styles.actor}>
                  {actor.name}
               </li>
            </Link>
         ))}
      </ul>
   )
}

export default Cast
