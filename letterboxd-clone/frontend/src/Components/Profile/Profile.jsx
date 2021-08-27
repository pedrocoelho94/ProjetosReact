import React from 'react'

const Profile = ({user}) => {

   console.log(user)
   
   if(!user) return null
   return (
      <section className="container">
         
         <h2>Bem Vindo {user.username}</h2>
      </section>
   )
}

export default Profile
