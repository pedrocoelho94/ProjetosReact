import React from 'react'
import {Helmet} from 'react-helmet'
import styles from './Home.module.css'
import { GET_HOME } from '../Tmdb'
import SliderMovies from './SliderMovies'
import { Link } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import NewsBox from './NewsBox'

const Home = () => {
   const { request } = useFetch()
   const [trend, setTrend] = React.useState(null)
   const [rated, setRated] = React.useState(null)

   React.useEffect(() => {
      const loadTrend = async () => {
         const { trend } = GET_HOME()
         const { json } = await request(trend)
         setTrend(json)
      }

      const loadTopRated = async () => {
         const { topRated } = GET_HOME()
         const { json } = await request(topRated)
         setRated(json)
      }

      window.scrollTo(0, 0)

      loadTrend()
      loadTopRated()
   }, [request])

   return (
      <>
         <Helmet>
            <title>Letterboxd</title>
         </Helmet>

         <section className={`${styles.home} container`}>
            <h2 className={styles.subtitle}>
               Bem Vindo. Aqui os filmes mais vistos da semana.
            </h2>

            <div className="line">
               <Link className="lineItem" to="/film">
                  todas categorias
               </Link>
               <Link className="lineItem" to="/film/top">
                  ver mais
               </Link>
            </div>

            {trend && <SliderMovies films={trend} />}
         </section>
         
         <section className={`container`}>
            <div className="line">
               <Link className="lineItem" to="/film">
                  Melhores Avaliados
               </Link>
               <Link className="lineItem" to="/film/top">
                  ver top 20
               </Link>
            </div>
            {rated && <SliderMovies films={rated} />}
         </section>

         <section className={`container`}>
            <div className="line">
               <Link className="lineItem" to="/news">
                  Notícias
               </Link>
               <Link className="lineItem" to="/news">
                  Ver mais
               </Link>
            </div>
            <NewsBox />
         </section>
      </>
   )
}

export default Home
