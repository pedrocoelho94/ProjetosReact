import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

import { DataStorage } from './DataContext'

import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer'

function App() {
   return (
      <DataStorage>
         <BrowserRouter>
            <Header />
            <div className="mt-5">
               <Routes />
            </div>
            <Footer />
         </BrowserRouter>
      </DataStorage>
   )
}

export default App
