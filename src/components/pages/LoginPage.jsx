import React from "react"
import { useState } from "react"


export default function LoginPage() {

//state
const [inputPrenom, setInputPrenom] = useState("")
//comportement
const handleChange=(e)=>{

  setInputPrenom(e.target.value)

}
const handleClick=()=>{
handleSubmit()

}
const handleSubmit = (e) => { 
  e.preventDefault()
  if (inputPrenom==="") {
    alert("Veuillez renseigner le prenon")
    
  } else {
  
    alert(`bonjour ! ${inputPrenom}`)
    setInputPrenom("")
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
                    value={inputPrenom}
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
