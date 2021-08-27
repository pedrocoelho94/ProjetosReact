import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import { HelmetProvider } from 'react-helmet-async'

import { UserStorage } from './DataContext'

import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer'



function App() {

   

   return (
      <BrowserRouter>
         <UserStorage>
            <Header />
            <div className="mt-5">
               <HelmetProvider>
                  <Routes />
               </HelmetProvider>
            </div>
            <Footer />
         </UserStorage>
      </BrowserRouter>
   )
}

export default App
