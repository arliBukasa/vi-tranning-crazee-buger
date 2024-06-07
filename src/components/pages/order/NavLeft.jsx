import React from 'react'
import styled from 'styled-components';
import Logo from '../../reusable-ui/Logo'

export default function NavLeft() {
  return (
    <NavLeftstyled className='left-side'>
        <Logo/>
    </NavLeftstyled>
  )
}
const NavLeftstyled = styled.div`
     /* border: 1px solid brown; */
     
`;
