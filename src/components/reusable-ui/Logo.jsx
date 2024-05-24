import React from 'react'
import styled from 'styled-components';
import { theme } from '../../theme';
function Logo() {
  return (
    <Logostyled>
        <h1>CRAZEE </h1> <img src='/images/logo-orange.png' alt='Logo-crazee'/><h1>BURGER</h1>
    </Logostyled>
  )
}
const Logostyled = styled.div`
  /*background: ${theme.colors.blue};*/
  display:flex;
  align-items:center;
 
  
  
  h1{
    display:inline;
    color:${theme.colors.primary};
    font-size:${theme.fonts.Xs};
    line-height:1em;
    font-weight:700px;
    text-tranform:uppercase;
    letter-spacing:1.5px;
    font-family:"Amatic SC", cursive;
  }
  img{
    object-fit:contain;
    object-position:center;
    height:60px;
    width:80px;
    margin:0 5px;
  }
`;
export default Logo