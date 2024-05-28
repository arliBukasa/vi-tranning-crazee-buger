import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Navbar({username}) {
  return (
    <NavbarStyled  className='navbar'>
        <h1>Bonjour {username}</h1> 
        <Link to="/"><button type='button'> Deconnexion</button>
        </Link>
    </NavbarStyled>
  )
}
const NavbarStyled = styled.nav`
    background: blue;
    height:10vh;
`
