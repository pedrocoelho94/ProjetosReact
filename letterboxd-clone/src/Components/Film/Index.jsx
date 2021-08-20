import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Action from './Action'
import FilmDetails from './FilmDetails'
import Films from './Films'
import FilmsByYear from './FilmsByYear'
import TopFilmes from './TopFilms'

const index = () => {
   return (
      <Routes>
         <Route path="/" element={<Films />} />
         <Route path="top" element={<TopFilmes />} />
         <Route path="acao" element={<Action />} />
         <Route path="/:id" element={<FilmDetails />} />
         <Route path="/:id/:details/" element={<FilmDetails />} />
         <Route path="/year/:year" element={<FilmsByYear />} />
      </Routes>
   )
}

export default index
