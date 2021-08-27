import React from 'react'
import styles from './LoginCreate.module.css'

import axios from 'axios'

import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'

const baseUrl = 'http://localhost:3001/users'
const initialState = {
   user: {
      name: '',
      email: '',
      password: '',
      token: '',
      watchedMovies: []
   },
   list: []
}

const LoginCreate = () => {
   const [usersList, setUsersList] = React.useState(initialState)

   const createUsername = useForm()
   const createEmail = useForm()
   const createPassword = useForm()
   const confirmPassword = useForm()

   React.useEffect(() => {
      axios(baseUrl).then(resp => {
         setUsersList({ ...initialState, list: resp.data })
      })
   }, [])

   function handleCreateAcc(event) {
      event.preventDefault()
      createUsername.validate()
      createEmail.validate()
      createPassword.validate()
      confirmPassword.validate()
      if (createPassword.value !== confirmPassword.value) {
         alert('Senhas precisam ser iguais')
      }

      const tokenNumber = Math.floor(Math.random() * (100000000000000 - 1) + 1)

      // faz o cadastro dos usuarios no db.json
      axios({
         method: 'post',
         url: baseUrl,
         data: {
            username: createUsername.value,
            email: createEmail.value,
            password: createPassword.value,
            token: tokenNumber,
            watchedMovies: []
         }
       });

      } 

   return (
      <div className={styles.createLogin}>
         <div>IMG</div>
         <div>
            {console.log(usersList)}
            <h2 className={styles.title}>Crie sua conta</h2>
            <form onSubmit={handleCreateAcc} className={styles.form}>
               <Input
                  label="Nome de Usuário"
                  type="text"
                  name="createUsername"
                  {...createUsername}
               />
               <Input
                  label="E-mail"
                  type="email"
                  name="createEmail"
                  {...createEmail}
               />
               <Input
                  label="Senha"
                  type="password"
                  name="createPassword"
                  {...createPassword}
               />
               <Input
                  label="Confirmar Senha"
                  type="password"
                  name="confirmPassword"
                  {...confirmPassword}
               />
               <Button>Criar Conta</Button>
            </form>
         </div>
      </div>
   )
}

export default LoginCreate
