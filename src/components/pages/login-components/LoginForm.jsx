import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../../theme'
import { IoChevronForward } from 'react-icons/io5'
import Input from '../../reusable-ui/input'
import {BsPersonCircle } from 'react-icons/bs'
import PrimaryButton from '../../reusable-ui/PrimaryButton'

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
                        <hr/>
                        <h2>connectez-vous!</h2>
                    </div>
                    <Input value={inputPrenom} onChange={handleChange} placeholder={"Enter votre prénom"} Icon={ <BsPersonCircle className='icon' />} required/>
                   
                    <PrimaryButton label={"Accedez à mon espace"} Icon={<IoChevronForward className='icon'/>} onClick={handleClick}/>
                
                </div>
            </div>
      </LoginFormstyled>
    </div>
  )
}



const LoginFormstyled  = styled.form`
/* background: ${theme.colors.red}; */
text-align:center;
max-width:500px;
min-width:400px;
margin:0px auto;
padding:2.5rem ${theme.spacing.lg};
border-radius:${theme.borderRadius.round};
font-family:"Amatic SC", cursive;
hr{
    border:1.5px solid ${theme.colors.primary};
    margin-bottom:${theme.gridUnit *5}px;
}
h1{
    color:${theme.colors.white};
    font-size:${theme.fonts.P5};
}
h2{
    color:${theme.colors.white};
    margin:20px 10px 10px;
    font-size:36px;
}
 
  
`;

