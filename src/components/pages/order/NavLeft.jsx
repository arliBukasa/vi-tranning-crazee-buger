import React from 'react'
import styled from 'styled-components';
import Logo from '../../reusable-ui/Logo'

export default function NavLeft() {

  //comportement
  const handleClick = () => { 
    
    console.log("onclick cliked")
    window.location.reload()
   }
  return (
    <NavLeftstyled className='left-side'>
        <Logo className="logo-order-page" onClick={()=>handleClick}/>
    </NavLeftstyled>
  )
}
const NavLeftstyled = styled.div`
     /* border: 1px solid brown; */
     .logo-order-page{
      cursor:pointer;
     }
`;
