import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Search.module.css'

const Search = ({value}) => {
   const [searchTerm, setSearchTerm] = React.useState('')

   const navigate = useNavigate()

   function handleSubmit(event) {
      event.preventDefault()
      const item = searchTerm.toLowerCase().trim()
      setSearchTerm('')
      navigate(`/search/${item}/page/1`)
   }

   return (
      <form onSubmit={handleSubmit}>
         <input
            className={styles.search}
            id="search"
            name="search"
            type="text"
            placeholder="Procurar..."
            value={searchTerm}
            onChange={({ target }) => setSearchTerm(target.value)}
         />
      </form>
   )
}

export default Search
