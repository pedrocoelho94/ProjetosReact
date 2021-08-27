import React from 'react'
import styles from './ExternalInformation.module.css'

const ExternalInformation = ({ id, runtime }) => {
   return (
      <div className={styles.info}>
         <span>{runtime} mins</span>
         <span>
            Vejam mais em{' '}
            <a rel="noreferrer" target="_blank" href={`https://www.themoviedb.org/movie/${id}`}>
               <span className={styles.more}>TMDB</span>
            </a>
         </span>
      </div>
   )
}

export default ExternalInformation
