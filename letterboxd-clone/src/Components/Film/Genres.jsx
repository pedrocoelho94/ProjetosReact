import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Genres.module.css'

const Genres = ({ genres }) => {
   if (!genres) return null
   return (
      
      <ul className={styles.genres}>
         {genres.genres.map(genre => (
            <Link key={genre.id} to={`/genre/${genre.id}`}>
               <li className={styles.genre}>
                  {genre.name}
               </li>
            </Link>
         ))}
      </ul>
   )
}

export default Genres
