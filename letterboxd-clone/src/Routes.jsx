import React from 'react'
import { Routes, Route } from 'react-router'

import Home from './Components/Home'
import Profile from './Components/Profile/Profile'
import Film from './Components/Film/Index'
import Actor from './Components/Actor/Index'
import Search from './Components/Search/Search'
import PageNotFound from './Components/PageNotFound'

const MainRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="film/*" element={<Film />} />
         <Route path="actor/*" element={<Actor />} />
         {/* <Route path="search/:search" element={<Search />} /> */}
         <Route path="search/:search/page/:page" element={<Search />} />
         <Route path="/*" element={<PageNotFound />} />

      </Routes>
   )
}

export default MainRoutes
