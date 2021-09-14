import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../services/api'
import { Link } from 'react-router-dom'

import styles from './SearchResults.module.scss'

type Book = {
   id: string
   volumeInfo: {
      title: string
      authors: Array<string>
      publishedDate: string
      publisher: string
      language: string
      imageLinks: {
         thumbnail: string
      }
   }
}

type PersonalSearchProps = {
   personalSearch: {
      term: string
      category: string
   }
}

export const SearchResults = ({ personalSearch }: PersonalSearchProps) => {
   const [booksList, setBooksList] = useState([])
   const { search: searchURL } = useParams<any>()


   useEffect(() => {
      let url: string

      switch (personalSearch.category) {
         case 'name':
            url = `volumes?q=intitle:${searchURL}`
            break
         case 'author':
            url = `volumes?q=inauthor:${searchURL}`
            break
         case 'publisher':
            url = `volumes?q=inpublisher:${searchURL}`
            break
         default:
            url = `volumes?q=${searchURL}`
            break
      }

      async function getBook() {
         const { data, config } = await api.get(
            `${url}&maxResults=10&startIndex=0`
         )
         console.log(`${config.baseURL}/${config.url}`)

         if(data.totalItems === 0) return alert('Nenhum item encontrado, tratar erro!')
         setBooksList(data.items)

      }

      getBook()
   }, [searchURL, personalSearch.category])

   return (
      <div className={`container`}>
         <h2>Busca... {personalSearch.term}</h2>

         <ul className={styles.booksList}>
            {booksList.map((item: Book) => (
               <li key={item.id}>
                  {item.volumeInfo.imageLinks ? (
                     <img src={item.volumeInfo.imageLinks.thumbnail} alt="" />
                  ) : (
                     <img
                        src="https://a-static.mlcdn.com.br/280x210/tapete-saturs-delhi-indiano-cinza-200-x-300-tapete-para-sala-e-quarto-tapetes-saturs/saturstapetes/5163p/4e0068d725e948dfcc40bb3aba3cacc7.jpg"
                        width="128"
                        height="196"
                        alt=""
                     />
                  )}

                  <div>
                     <Link to={`../book/${item.id}`}>
                        <p>Nome: {item.volumeInfo.title}</p>
                     </Link>
                     <p>Data de Publicação: {item.volumeInfo.publishedDate}</p>
                     <p>Editora: {item.volumeInfo.publisher}</p>
                     <p>Idioma: {item.volumeInfo.language}</p>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   )
}
