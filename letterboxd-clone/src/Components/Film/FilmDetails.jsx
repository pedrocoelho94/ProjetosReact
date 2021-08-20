import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
import { GET_FILM } from '../../Tmdb'
import Director from './FilmDirector'
import FilmHeader from './FilmHeader'

import Cast from './Cast'
import Crew from './Crew'
import Details from './Details'

import styles from './FilmDetais.module.css'
import Genres from './Genres'
import ExternalInformation from './ExternalInformation'

const FilmDetails = () => {
   const { id } = useParams()
   const [film, setFilm] = useState(null)
   const [filmCast, setFilmCast] = useState(null)
   const [yearRelease, setYearRelease] = useState(null)
   const { request } = useFetch()
   const { pathname } = useLocation()
   const [component, setComponent] = useState(null)

   useEffect(() => {
      switch (pathname) {
         case `/film/${id}`:
            setComponent(<Cast cast={filmCast} />)
            break
         case `/film/${id}/crew`:
            setComponent(<Crew crew={filmCast} />)
            break
         case `/film/${id}/details`:
            setComponent(<Details details={film} />)
            break
         case `/film/${id}/genres`:
            setComponent(<Genres genres={film} />)
            break
         default:
            setComponent('Você não deveria estar aqui!')
            break
      }
   }, [id, pathname, filmCast, film])

   useEffect(() => {
      async function fetchFilms() {
         const { url } = GET_FILM(id)
         const { json } = await request(url)
         let year = new Date(json.release_date)
         setYearRelease(year.getFullYear())
         setFilm(json)
      }

      async function fetchFilmsCredits() {
         const { urlCast } = GET_FILM(id)
         const { json } = await request(urlCast)
         setFilmCast(json)
      }

      fetchFilms()
      fetchFilmsCredits()
   }, [request, id])

   if (film === null || filmCast === null) return null
   return (
      <section className={styles.featured}>
         <div className={styles.horizontalRight}>
            <div className={styles.horizontalLeft}>
               <div className={styles.backdrop}>
                  <img
                     src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`}
                     alt=""
                  />
               </div>
            </div>
         </div>

         <div className={`${styles.info} container`}>
            <aside className={styles.poster}>
               <img
                  src={`https://image.tmdb.org/t/p/w200${film.poster_path}`}
                  alt=""
               />
            </aside>
            <section className={styles.description}>
               <div>
                  <h2 className={styles.title}>{film.title}</h2>{' '}
                  <span className={styles.linkTitle}>
                     <Link to={`/year/${yearRelease}`}>{yearRelease}</Link>
                  </span>{' '}
                  <span className={styles.directed}>Dirigido por</span>{' '}
                  <span className={styles.linkTitle}>
                     <Director director={filmCast.crew} />
                  </span>
               </div>

               <p className={styles.tagline}>{film.tagline}</p>
               <p className={styles.overview}>{film.overview}</p>
               <ExternalInformation id={id} runtime={film.runtime}/>
               <FilmHeader id={id} />
               {component}
            </section>
         </div>
      </section>
   )
}

export default FilmDetails
