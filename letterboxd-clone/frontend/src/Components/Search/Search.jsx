import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { SEARCH_ITEM } from '../../Tmdb'
import useFetch from '../../Hooks/useFetch'
import noPoster from '../../Assets/no-poster-82x123.jpg'
import Pagination from '../Pagination/Pagination'

import styles from './Search.module.css'

const Search = () => {
   const { search, page } = useParams()
   const { data, request } = useFetch()

   React.useEffect(() => {
      const { url } = SEARCH_ITEM(search, page)
      request(url)
   }, [request, search, page])

   if (!data) return null
   return (
      <section className={`${styles.search} container`}>
         {console.log(data)}
         <div className="line">
            <p className="lineItem">
               Você pesquisou por "{search}" e {data.total_results}{' '}
               {data.total_results === 1
                  ? 'resultado foi encontrado.'
                  : 'resultados foram encontrados.'}
            </p>
         </div>

         <br />

         {data.results
            .filter(item => item.media_type !== 'tv')
            // eslint-disable-next-line array-callback-return
            .map(result => {
               if (result.media_type === 'movie') {
                  return (
                     <div>
                        <div key={result.id} className={styles.results}>
                           <Link
                              className={styles.poster}
                              to={`/film/${result.id}`}
                           >
                              <img
                                 src={
                                    result.poster_path === null
                                       ? noPoster
                                       : `https://image.tmdb.org/t/p/w200${result.poster_path}`
                                 }
                                 alt=""
                              />
                           </Link>
                           <div className={styles.info}>
                              <Link to={`/film/${result.id}`}>
                                 <h3 className={styles.title}>
                                    {result.title}
                                 </h3>
                              </Link>
                              <p className={styles.subtitle}>
                                 Título Original: {result.original_title}
                              </p>
                              <p className={styles.subtitle}>Dirigido por</p>
                           </div>
                        </div>
                        <div className="divisor"></div>
                     </div>
                  )
               }

               if (result.known_for_department === 'Acting') {
                  return (
                     <div key={result.id} className={styles.results}>
                        <Link
                           className={styles.poster}
                           to={`/actor/${result.id}`}
                        >
                           <img
                              src={
                                 result.profile_path === null
                                    ? noPoster
                                    : `https://image.tmdb.org/t/p/w200${result.profile_path}`
                              }
                              alt=""
                           />
                           <img src="" alt="" />
                        </Link>
                        <div className={styles.info}>
                           <Link to={`/actor/${result.id}`}>
                              <h3 className={styles.title}>{result.name}</h3>
                           </Link>

                           <p className={styles.subtitle}>
                              {result.gender === 1 ? 'Conhecida' : 'Conhecido'}{' '}
                              por{' '}
                              {result.known_for.map(film =>
                                 film.title ? (
                                    <Link
                                       key={film.id}
                                       className={styles.filmTitles}
                                       to={`/film/${film.id}`}
                                    >
                                       {film.title}
                                    </Link>
                                 ) : (
                                    <p className={styles.filmTitles}>
                                       {film.name}
                                    </p>
                                 )
                              )}
                           </p>
                        </div>
                     </div>
                  )
               }
            })}

         <Pagination totalPages={data.total_pages} currentPage={page} />
      </section>
   )
}

export default Search
