import { Route, Switch } from 'react-router'
import { About } from './pages/About'
import { BookDetails } from './pages/BookDetails'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Search } from './pages/Search'

export const Routes = () => {
   return (
      <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/search/" exact component={Search} />
         <Route path="/search/:search" component={Search} />
         <Route path="/book/:bookId" component={BookDetails} />
         <Route path="/about" component={About} />
         <Route path="/contact" component={Contact} />
      </Switch>
   )
}
