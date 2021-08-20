import React from 'react'


export const DataContext = React.createContext()

export const DataStorage = ({ children }) => {

   

   return (
      <DataContext.Provider value={{}}>
         {children}
      </DataContext.Provider>
   )
}
