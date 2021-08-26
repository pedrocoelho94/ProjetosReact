import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import { Room } from './pages/Room'

import { AuthContextProvider } from './contexts/AuthContext'
import { AdminRoom } from './pages/AdminRoom'
import { useAuth } from './hooks/useAuth'

function App() {
   const { user } = useAuth()

   // const PrivateRoute = ({Component, ...rest}) => (
   //    <Route 
   //       {...rest}
   //          render={props => 
   //             user ?  (
   //             <Component {...props} />
   //             ) : (
   //             <Redirect to={{pathname: "/"}} />
   //             )
   //          }
   //       />
   //    )

   return (
      <BrowserRouter>
         <AuthContextProvider>
            <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/rooms/new" component={NewRoom} />
               <Route path="/rooms/:id" component={Room} />
               <Route path="/admin/rooms/:id" component={AdminRoom} />
            </Switch>
         </AuthContextProvider>
      </BrowserRouter>
   )
}

export default App
