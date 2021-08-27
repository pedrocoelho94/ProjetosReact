import React from 'react'
import { Routes, Route } from 'react-router'

import Home from './Components/Home'
import Profile from './Components/Profile/Profile'
import Film from './Components/Film/Index'
import Search from './Components/Search/Search'
import PageNotFound from './Components/PageNotFound'
import Person from './Components/Person/Person'
import Login from './Components/Login/Login'
import { UserContext } from './DataContext'

const MainRoutes = () => {

   const { user } = React.useContext(UserContext)

   return (
      <Routes>
         <Route path="/" element={<Home user={user}/>} />
         <Route path="login/*" element={<Login user={user}/>} />
         <Route path="/profile" element={<Profile user={user}/>} />
         <Route path="film/*" element={<Film user={user}/>} />
         <Route path="/:job/:id" element={<Person user={user}/>} />
         {/* <Route path="search/:search" element={<Search />} /> */}
         <Route path="search/:search/page/:page" element={<Search user={user}/>} />
         <Route path="/*" element={<PageNotFound />} />
      </Routes>
   )
}

export default MainRoutes
