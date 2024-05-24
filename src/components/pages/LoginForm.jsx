import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../theme'

export default function LoginForm() {

    //state
    const [inputPrenom, setInputPrenom] = useState("")
    const navigate=useNavigate()
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
    
        //alert(`bonjour ! ${inputPrenom}`)
        navigate(`order/${inputPrenom}`)
        setInputPrenom("")
    } 

    }
    //affichage
  return (
    <div>
        <LoginFormstyled className="d-flex" action='submit' onSubmit={handleSubmit}>
            
            <div className="col">
                <div className="mb-3">
                    <div>
                        <h1>Bienvenue chez vous!</h1>
                        <h5>connectez-vous!</h5>
                    </div>
            
                    <input
                        type="text"
                        required
                        name=""
                        value={inputPrenom}
                        onChange={(e) =>handleChange(e)}
                        id=""
                        className="form-control"
                        placeholder="Enter votre prénom"
                        aria-describedby="helpId"
                    />
                    {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                    <button  className="form-control" onClick={handleClick}>
                    Accedez à mon espace
                    </button>
                
                </div>
            </div>
      </LoginFormstyled>
    </div>
  )
}



const LoginFormstyled  = styled.form`
background: ${theme.colors.red};
button{
    background: ${theme.colors.primary_burger};
  }
input{
    border-radius:5px;
    background:${theme.colors.background_white};
    border: 1px solid ;
}
  
`;

