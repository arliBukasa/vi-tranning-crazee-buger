import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div>
        <h1>Oups!  la page que vous cherchez n' existe pas</h1>

        <Link to="/">
        <button
            type="button"
            class="btn btn-outline-primary"
        >
            Retourner à l'acceuil
        </button>
        
        </Link>
    
    </div>
  )
}
