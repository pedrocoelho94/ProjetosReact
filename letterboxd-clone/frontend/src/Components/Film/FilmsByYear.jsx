import React from 'react'
import { useParams } from 'react-router-dom'

const FilmsByYear = () => {
   const { year} = useParams()

   return (
      <section className="container">
         <h2>Filmes de {year}</h2>
      </section>
   )
}

export default FilmsByYear
