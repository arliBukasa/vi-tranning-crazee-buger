import React from "react"
import { useState } from "react"
import LoginForm from "./LoginForm"
import styled from "styled-components"
import { theme } from "../../theme"
import Logo from "../reusable-ui/Logo"


export default function LoginPage() {

//state
const [connected, setConnected] = useState(false)
const [username, setUsername] = useState("")

//comportement

//affichage
  return (
  <LoginPagestyled>
    <div className="flex-container">
      <Logo/> 
      <LoginForm/> 
    </ div>
  </LoginPagestyled>)
  
  
  
}
const LoginPagestyled=styled.body`
background: ${theme.colors.green};
height:100vh;
width:100vh;
display: flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;

.flex-container {
  
} 
`
 