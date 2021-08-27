import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const UserContext = React.createContext()

export const UserStorage = ({ children }) => {
   const [user, setUser] = React.useState(null)
   const [login, setLogin] = React.useState(null)

   const navigate = useNavigate()

   const userLogout = React.useCallback(
      async function userLogout() {
         setUser(null)
         setLogin(false)
         window.localStorage.removeItem('token')
         navigate('/')
      },
      [navigate]
   )

   async function userLogin(username, password) {
      const response = await axios.get('http://localhost:3001/users/')
      const login = response.data.filter(data => {
         return data.username === username && data.password === password
      })

      console.log(login)

      if (login.length === 1) {
         const token = login[0].token
         localStorage.setItem('token', token)
         setUser({
            id: login[0].id,
            username: login[0].username,
            email: login[0].username,
            watchedMovies: login[0].watchedMovies
         })
         setLogin(true)
         navigate('/')
      }
   }

   React.useEffect(() => {
      async function autoLogin() {
         const tokenStorage = window.localStorage.getItem('token')
         if (tokenStorage) {
            const response = await axios.get('http://localhost:3001/users/')
            const login = response.data.filter(
               data => data.token.toString() === tokenStorage
            )

            if (login.length === 1) {
               setUser({
                  id: login[0].id,
                  username: login[0].username,
                  email: login[0].username,
                  watchedMovies: login[0].watchedMovies
               })
               setLogin(true)
            }
         } else {
            setLogin(false)
         }
      }

      autoLogin()
   }, [])

   return (
      <UserContext.Provider value={{ userLogin, userLogout, user, login }}>
         {children}
      </UserContext.Provider>
   )
}
