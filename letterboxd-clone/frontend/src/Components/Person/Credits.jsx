import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
import { PERSON } from '../../Tmdb'
import Loading from '../Helpers/Loading'

import styles from './Credits.module.css'

const Credits = () => {
   const { job, id } = useParams()
   const { data, loading, request } = useFetch()
   const [castMovies, setCastMovies] = React.useState()
   const [crewMovies, setCrewMovies] = React.useState()
   const [castCount, setCastCount] = React.useState(0)
   const [directorCount, setDirectorCount] = React.useState(0)
   const [producerCount, setProducerCount] = React.useState(0)
   const [writerCount, setWriterCount] = React.useState(0)

   const firstLetter = job.charAt(0).toUpperCase()
   const remain = job.slice(1)
   const jobCapitalize = firstLetter + remain
   let jobCapitalizeBR = ''

   if (jobCapitalize === 'Actor') jobCapitalizeBR = 'Atuação'
   if (jobCapitalize === 'Director') jobCapitalizeBR = 'Direção'
   if (jobCapitalize === 'Writer') jobCapitalizeBR = 'Roteiro'
   if (jobCapitalize === 'Producer') jobCapitalizeBR = 'Produção'

   React.useEffect(() => {
      const { urlCredits } = PERSON(id)
      request(urlCredits)
   }, [id, request, job])

   React.useEffect(() => {
      if (data)
         if (job === 'actor') {
            setCrewMovies(null)
            setCastMovies([...data.cast])
         } else {
            setCastMovies(null)
            setCrewMovies([...data.crew])
         }
   }, [data, job, jobCapitalize])

   React.useEffect(() => {
      if (data) {
         setCastCount(data.cast.length)
         const countDirector = data.crew.filter(film =>
            film.job.includes('Director')
         )
         setDirectorCount(countDirector.length)
         const countProducer = data.crew.filter(film =>
            film.job.includes('Producer')
         )
         setProducerCount(countProducer.length)
         const countWriter = data.crew.filter(film =>
            film.job.includes('Writer')
         )
         setWriterCount(countWriter.length)
      }
   }, [data])

   function compare(a, b) {
      if (a.popularity < b.popularity) {
         return 0
      }
      if (a.popularity > b.popularity) {
         return -1
      }
   }

   function listMovies(film) {
      return (
         <Link key={film.id} to={`/film/${film.id}`}>
            <div className={styles.poster}>
               {film.poster_path ? (
                  <img
                     src={`https://image.tmdb.org/t/p/w200${film.poster_path}`}
                     alt={film.title}
                     title={film.title}
                  />
               ) : (
                  <div className={styles.nullPoster}>{film.title}</div>
               )}
            </div>
         </Link>
      )
   }

   if (!data) return null
   return (
      <>
         <div className={styles.dropdown}>
            <button className={styles.dropbtn}>{jobCapitalizeBR}</button>
            <div className={styles.dropdownContent}>
               {castCount > 0 && (
                  <Link to={`/../../actor/${id}`}>Atuação - {castCount}</Link>
               )}
               {directorCount > 0 && (
                  <Link to={`/../../director/${id}`}>
                     Direção - {directorCount}
                  </Link>
               )}
               {writerCount > 0 && (
                  <Link to={`/../../writer/${id}`}>
                     Roteiro - {writerCount}
                  </Link>
               )}
               {producerCount > 0 && (
                  <Link to={`/../../producer/${id}`}>
                     {' '}
                     Produção - {producerCount}
                  </Link>
               )}
            </div>
         </div>
         <br />
         {loading && <Loading />}

         {!loading}
         {castMovies && (
            <div className={styles.listFilms}>
               {castMovies.sort(compare).map(listMovies)}
            </div>
         )}

         {crewMovies && (
            <div className={styles.listFilms}>
               {crewMovies
                  .sort(compare)
                  .filter(film => film.job.includes(jobCapitalize))
                  .map(listMovies)}
            </div>
         )}
      </>
   )
}

export default Credits
