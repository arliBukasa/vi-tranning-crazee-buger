import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NavRight from './NavRight'
import NavLeft from './NavLeft'
import { theme } from '../../../theme'

export default function Navbar({username}) {
  return (
    <NavbarStyled  className='navbar'>
        <NavLeft/>
        <NavRight username={username}/>
       
    </NavbarStyled>
  )
}
const NavbarStyled = styled.nav`
    background: ${theme.colors.white};
    height:10vh;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 20px;

    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};
    

`
