import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styles from './LoginForm.module.css'

import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../DataContext'

const LoginForm = () => {
   const username = useForm()
   const password = useForm()
 
   const { userLogin } = React.useContext(UserContext)

   async function handleSignIn(event) {
      event.preventDefault()
      // chamada a api
      // se retorno ok, direciona para home, senão exibe mensagem para o usuário
      userLogin(username.value, password.value)
   }

   return (
      <section className={styles.loginWrapper}>
         <div>
            <div>
               <h2 className={styles.subtitle}>Faça o login</h2>
               <form onSubmit={handleSignIn} className={styles.form}>
                  <Input label="Nome de Usuário" type="text" name="username" {...username}/>
                  <Input label="Senha" type="password" name="password" {...password}/>
                  <Button>Entrar</Button>
               </form>
               <Link to="/recuperar" className={styles.lost}>
                  Esqueci minha senha
               </Link>
            </div>

            <div>
               <h2 className={styles.subtitle}>Cadastre-se</h2>
               <p>
                  Ainda não possui conta?{' '}
                  <Link to="/create-account">Clique aqui</Link>.
               </p>
            </div>
         </div>
         <div>IMG</div>
      </section>
   )
}

export default LoginForm
