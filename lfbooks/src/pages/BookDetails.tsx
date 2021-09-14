import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../services/api'

type Book = {
   id: string
   selfLink: string
   volumeInfo: {
      title: string
      subtitle: string
      authors: Array<string>
      publishedDate: string
      publisher: string
      description: string
      pageCount: number
      categories: Array<string>
      language: string
      imageLinks: {
         thumbnail: string
      }
   }
   saleInfo: {
      buyLink: string
   }
}

export const BookDetails = () => {
   const [book, setBook] = useState({} as Book)
   const { bookId } = useParams<any>()

   useEffect(() => {
      async function getBook() {
         const { data } = await api.get(`/volumes/${bookId}`)
         setBook(data)
         console.log('data:', data)
      }

      getBook()
   }, [bookId])

   return (
      <main className={`container`}>
         <h2>Livro Detalhes {bookId}</h2>
         <p>{book.volumeInfo?.title}</p>
         <p>{book.volumeInfo?.subtitle}</p>
         <p>{book.volumeInfo?.description}</p>
         
      </main>
   )
}
