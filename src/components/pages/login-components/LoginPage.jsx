import React from "react"
import LoginForm from "./LoginForm"
import styled from "styled-components"
import { theme } from "../../../theme"
import Logo from "../../reusable-ui/Logo"


export default function LoginPage() {

//state

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
const LoginPagestyled=styled.div`
/*background: ${theme.colors.green};*/
height:100vh;
display: flex;
justify-content:center;
align-items:center;
flex-direction: column;

::before{
  height:100vh;
  content:"";
  background:url("/images/burger-background.jpg") rgba(0,0,0,0.7);
  background-size:cover;
  background-position:center;
  background-blend-mode:darken;
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:-1;
}
.flex-container {
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  
  
} 
`
 