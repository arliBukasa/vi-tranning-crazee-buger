import React from "react"
import { useState } from "react"


export default function LoginPage() {

//state
const [count, setCount] = useState("")
//comportement
const handleChange=(e)=>{

  setCount(e.target.value)

}
const handleClick=()=>{
handleSubmit()

}
const handleSubmit = (e) => { 
  e.preventDefault()
  if (count==="") {
    alert("Veuillez renseigner le prenon")
    
  } else {
  
    alert(`bonjour ! ${count}`)
  } 

 }
//affichage
  return( <div>
    <form class="d-flex" action='submit' onSubmit={handleSubmit}>
        <h1>Bienvenue chez vous</h1>
        <h5>Veuillez vous connecter</h5>
        <div class="col">
            <div class="mb-3">
        
                <input
                    type="text"
                    required
                    name=""
                    value={count}
                    onChange={(e) =>handleChange(e)}
                    id=""
                    class="form-control"
                    placeholder="veuillez enter votre prénom"
                    aria-describedby="helpId"
                />
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button  class="form-control" onClick={handleClick}>
                Accedez dans votre espace
                </button>
              
            </div>
        </div>
      </form>
     </div>
  )
  
}
