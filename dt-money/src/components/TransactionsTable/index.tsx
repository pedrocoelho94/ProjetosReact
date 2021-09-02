import { useEffect } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'

export const TransactionTable = () => {
   useEffect(() => {
      api.get('/transactions').then(response => console.log(response.data))
   }, [])

   return (
      <div>
         <Container>
            <table>
               <thead>
                  <tr>
                     <th>Título</th>
                     <th>Valor</th>
                     <th>Categoria</th>
                     <th>Data</th>
                  </tr>
               </thead>

               <tbody>
                  <tr>
                     <td>Dev Website</td>
                     <td className="deposit">R$ 12.000,00</td>
                     <td>Desenvolvimento</td>
                     <td>20/02/2021</td>
                  </tr>
                  <tr>
                     <td>Pastel</td>
                     <td className="withdraw"> - R$ 20,00</td>
                     <td>Comida</td>
                     <td>21/02/2021</td>
                  </tr>
                  <tr>
                     <td>Curso de Italiano</td>
                     <td className="withdraw"> - R$ 940,00</td>
                     <td>Estudos</td>
                     <td>21/02/2021</td>
                  </tr>
               </tbody>
            </table>
         </Container>
      </div>
   )
}
