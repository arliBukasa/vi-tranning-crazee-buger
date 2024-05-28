import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function NavRight({username}) {
  return (
    <NavRightstyled className='right-side'>
        <h1>Bonjour {username}</h1> 
        <Link to="/"><button type='button'> Deconnexion</button>
        </Link>
    </NavRightstyled>
  )
}
const NavRightstyled = styled.div`
    background: yellow;
`;