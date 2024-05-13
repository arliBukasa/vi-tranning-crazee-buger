import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function OrderPage() {
    //etat
    const { inputPrenom }=useParams()
    console.log(useParams())
    console.log(`inputPrenom:${inputPrenom}`)
    
    const [username, setUsername] = useState(inputPrenom)

    //comportement
    //setUser("username")
  return (
    <div>
       <h1>Bonjour {username}</h1> 
       <Link to="/"><button type='button'> Deconnexion</button>
       </Link>
    </div>
  )
}
