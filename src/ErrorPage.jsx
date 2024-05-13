import React from 'react'

export default function ErrorPage() {
  return (
    <div>
        <h1>Oups!  la page que vous cherchez n' existe pas</h1>
        <a href={`/`}>
        
        <button
            type="button"
            class="btn btn-outline-primary"
            href="/"
        >
            Retourner à l'acceuil
        </button>
        
        </a>
    
    </div>
  )
}
