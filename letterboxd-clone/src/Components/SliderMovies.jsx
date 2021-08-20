import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SliderMovies.module.css'

const SliderMovies = ({ films }) => {
   const [position, setPosition] = React.useState(0)

   function handleLeft() {
      let x = position + (window.innerWidth - 200)
      if (x > 0) x = 0
      setPosition(x)
   }

   function handleRight() {
      let x = position - 360
      let listWidth = films.results.length * 180
      if (window.innerWidth - listWidth > x) {
         x = window.innerWidth - listWidth
      }

      setPosition(x)
   }

   return (
      <section className={styles.sliderArea}>
         <div className={styles.left} onClick={handleLeft}>
            L
         </div>

         <div className={styles.right} onClick={handleRight}>
            R
         </div>

         <div
            className={styles.slider}
            style={{
               width: `${films.results.length * 200}px`,
               marginLeft: `${position}px`
            }}
         >
            {films.results.map(film => (
               <div key={film.id} className={styles.item}>
                  <Link to={`film/${film.id}`}>
                     <img
                        src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
                        alt={film.original_title}
                     />
                  </Link>
               </div>
            ))}
         </div>
      </section>
   )
}

export default SliderMovies
