import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState("")



  // comportement
  const handleChange=(e)=>{
    if (e.target.value==="") {
      alert("Veuillez renseigner le prenon")
      
    }
    console.log(e.target.value)
    setCount(e.target.value)

  }
const handleClick=()=>{
 
  if (count==="") {
    alert("Veuillez renseigner le prenon")
    
  } else {

    alert("bonjour ",count)
  }

}






  return (
    <>
      <div>
       
       
      </div>
      <h1>Bienvenue chez vous</h1>
      <h5>Veuillez vous connecter</h5>
      <div className="card">
        <form class="d-flex">
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
    </>
  )
}

export default App
