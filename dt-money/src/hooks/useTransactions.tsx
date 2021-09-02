import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

interface Transaction {
   id: number
   title: string
   amount: number
   category: string
   type: string
   createdAt: string
}

type TransacionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
   children: ReactNode
}

interface TransactionsContextData {
   transactions: Transaction[]
   createTransaction: (transaction: TransacionInput) => Promise<void>
}

const TransactionContext = createContext<TransactionsContextData>(
   {} as TransactionsContextData
)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
   const [transactions, setTransactions] = useState<Transaction[]>([])

   useEffect(() => {
      api.get('/transactions').then(response =>
         setTransactions(response.data.transactions)
      )
   }, [])

   async function createTransaction(transactionInput: TransacionInput) {
      const reseponse = await api.post('/transactions', {...transactionInput, createdAt: new Date()})
      const { transaction } = reseponse.data

      setTransactions([...transactions, transaction])
   }

   return (
      <TransactionContext.Provider value={{ transactions, createTransaction }}>
         {children}
      </TransactionContext.Provider>
   )
}

export function useTransactions(){
   const context = useContext(TransactionContext)

   return context
}