import React from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
import { PERSON } from '../../Tmdb'
import Credits from './Credits'

import styles from './Person.module.css'

const Person = () => {
   const { id } = useParams()
   const { data, request } = useFetch()

   React.useEffect(() => {
      const { url } = PERSON(id)
      request(url)
   }, [id, request])

   if (!data) return null
   return (
      <div className={`${styles.person} container section`}>

         <Helmet>
            <title>{data.name} - Letterboxd</title>
         </Helmet>

         <section>
            <h2>{data.name}</h2>
            <Credits />
         </section>

         <aside className={styles.aside}>
            <img
               src={`https://image.tmdb.org/t/p/w200${data.profile_path}`}
               alt=""
            />
            <p className={styles.description}>{data.biography}</p>
            <span>
               Vejam mais em{' '}
               <a
                  rel="noreferrer"
                  target="_blank"
                  href={`https://www.themoviedb.org/person/${id}`}
               >
                  <span className={styles.more}>TMDB</span>
               </a>
            </span>
         </aside>
      </div>
   )
}

export default Person
