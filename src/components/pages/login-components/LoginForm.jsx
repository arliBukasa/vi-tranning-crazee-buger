import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../../theme'
import { BsPersonCircle } from 'react-icons/bs'
import { IoChevronForward } from 'react-icons/io5'

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
            
                    <div className='input-container'>
                        <BsPersonCircle className='icon'/>
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
                    </div>
                    {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                    <button  className="" onClick={handleClick}>
                   <span> Accedez à mon espace</span> <IoChevronForward className='icon'/>
                    </button>
                
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
padding:2.5rem 2rem;
border-radius:5px;
font-family:"Amatic SC", cursive;
hr{
    border:1.5px solid ${theme.colors.primary};
    margin-bottom:40px;
}
h1{
    color:${theme.colors.white};
    font-size:48px;
}
h2{
    color:${theme.colors.background_white};
    margin:20px 10px 10px;
    font-size:36px;
}
button{
    background: ${theme.colors.primary_burger};
    color:${theme.colors.white};
    width:100%;
    border: 1px solid ${theme.colors.primary_burger};
    display:inline-flex;
    justify-content:center;
    align-items:center;
    line-height:1;

    padding:18px 24px;
    border-radius:5px;
    font-size:15px;
    font-weight:700;
    &:hover{
        background:${theme.colors.white};
        color:${theme.colors.primary};
    }
    .icon{ 
        font-size:15px;
        margin-left:8px;

    }
   
  }
  
.input-container{
    border-radius:5px;
    background:${theme.colors.background_white};
    display:flex;
    align-items:center;
    padding:18px 24px;
    margin:18px 0;
    
    .icon{ 
        font-size:15px;
        margin-right:8px;
        color:#93a2b1;
    }
    input{  
    border: none ;
    font-size:15px;
    color:#17161a;
    }
   
}

  
`;

