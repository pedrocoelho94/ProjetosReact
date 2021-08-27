import React from 'react'
import { Routes, Route } from 'react-router-dom'
import styles from './Login.module.css'
import LoginCreate from './LoginCreate'

import LoginForm from './LoginForm'
import LoginLost from './LoginLost'
import LoginReset from './LoginReset'

const Login = () => {
   return (
      <section className={`${styles.login} container`}>
         <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/create-account" element={<LoginCreate />} />   
            <Route path="recuperar" element={<LoginLost />} />
            <Route path="reset" element={<LoginReset />} />
         </Routes>
      </section>
   )
}

export default Login
