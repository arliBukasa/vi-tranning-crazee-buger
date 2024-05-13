import React, { useState } from 'react'

export default function OrderPage() {
    //etat

    const [user, setUser] = useState("bob")
    const {username}={username:"bob"}
    //comportement
    //setUser("username")
  return (
    <div>
       <h1>Bonjour {user}</h1> 
       <button type='button'> Deconnexion</button>
    </div>
  )
}
