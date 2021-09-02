import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import { useTransactions } from '../../hooks/useTransactions'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container, TransactionTypeContainer, RadioBox } from './styles'

interface NewTransactionModalProps {
   isOpen: boolean
   onRequestClose: () => void
}

export const NewTransactionModal = ({
   isOpen,
   onRequestClose
}: NewTransactionModalProps) => {
   const { createTransaction } = useTransactions()

   const [type, setType] = useState('deposit')
   const [title, setTitle] = useState('')
   const [amount, setAmount] = useState(0)
   const [category, setCategory] = useState('')

   async function handleCreateNewTransection(event: FormEvent) {
      event.preventDefault()

      await createTransaction({
         title,
         amount,
         category,
         type
      })
      
      setTitle('')
      setAmount(0)
      setCategory('')
      setType('deposit')

      onRequestClose()
   }

   return (
      <Modal
         isOpen={isOpen}
         onRequestClose={onRequestClose}
         overlayClassName="react-modal-overlay"
         className="react-modal-content"
      >
         <button
            type="button"
            onClick={onRequestClose}
            className="react-modal-close"
         >
            <img src={closeImg} alt="Fechar modal" />
         </button>

         <Container onSubmit={handleCreateNewTransection}>
            <h2>Cadastrar Transação</h2>

            <input
               type="text"
               placeholder="Título"
               value={title}
               onChange={event => setTitle(event.target.value)}
            />
            <input
               type="number"
               placeholder="Valor"
               value={amount}
               onChange={event => setAmount(Number(event.target.value))}
            />

            <TransactionTypeContainer>
               <RadioBox
                  isActive={type === 'deposit'}
                  activeColor="green"
                  type="button"
                  onClick={() => setType('deposit')}
               >
                  <img src={incomeImg} alt="Entrada" />
                  <span>Entrada</span>
               </RadioBox>

               <RadioBox
                  isActive={type === 'withdraw'}
                  activeColor="red"
                  type="button"
                  onClick={() => setType('withdraw')}
               >
                  <img src={outcomeImg} alt="Entrada" />
                  <span>Saída</span>
               </RadioBox>
            </TransactionTypeContainer>

            <input
               type="text"
               placeholder="Categoria"
               value={category}
               onChange={event => setCategory(event.target.value)}
            />

            <button type="submit">Cadastrar</button>
         </Container>
      </Modal>
   )
}
