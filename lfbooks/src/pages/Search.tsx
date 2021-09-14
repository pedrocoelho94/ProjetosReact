import { FormEvent, useEffect, useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useHistory, useParams } from 'react-router'
import Select from 'react-select'

import styles from './Search.module.scss'
import { SearchResults } from './SearchResults'

const options = [
   { value: 'bookName', label: 'Nome do Livro' },
   { value: 'author', label: 'Autor' },
   { value: 'publisher', label: 'Editora' }
]

type SelectOption = {
   value: string
   label: string
}

type MySearchProps = {
   term: string
   category: string
}

export const Search = () => {
   const [alert, setAlert] = useState(false)
   const [selectedOption, setSelectedOption] = useState<SelectOption>()
   const [searchValue, setSearchValue] = useState('')
   const [isShowSearchActive, setIsShowSearchActive] = useState(false)
   const [mySearch, setMySeartch] = useState({} as MySearchProps)

   const { search } = useParams<any>()

   let history = useHistory()

   useEffect(() => {
      if (search !== undefined) {
         setIsShowSearchActive(true)
      }
   }, [search])

   function handleSubmit(event: FormEvent) {
      event.preventDefault()
      if (selectedOption?.value && searchValue !== '') {
         setAlert(false)
         setIsShowSearchActive(true)

         setMySeartch({
            term: searchValue,
            category: selectedOption.value
         })

         history.push(
            `/search/${encodeURI(searchValue)
               .replaceAll('%20', '-')
               .toLowerCase()}`
         )
      } else {
         setAlert(true)
      }
   }

   return (
      <main className="container" id={styles.search}>
         <section className="section">
            <p className={styles.description}>
               You don't need to know the name of the book, <br /> if you know
               the name of the author or publisher, just type, search and find{' '}
            </p>

            <form onSubmit={handleSubmit}>
               <input
                  type="text"
                  value={searchValue}
                  onChange={({ target }) => setSearchValue(target.value)}
                  placeholder="Pesquisar..."
               />
               <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption as any}
                  options={options}
                  className={styles.selected}
                  placeholder="Selecione"
               />
               <button type="submit">
                  <BiSearchAlt2 size="2rem" />
               </button>
            </form>
            {alert && (
               <p className={styles.alert}>
                  É necessário selecionar um termo de pesquisa.
               </p>
            )}
         </section>

         {isShowSearchActive ? <SearchResults personalSearch={mySearch} /> : ''}
      </main>
   )
}
