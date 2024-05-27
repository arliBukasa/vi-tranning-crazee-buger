import React from 'react'
import styled from 'styled-components';
import { theme } from '../../theme';

export default function PrimaryButton({label, Icon, onClick}) {
  return (
    <PrimaryButtonStyled  onClick={onClick}>
        <span>{label}</span> 
        {Icon && Icon}
    </PrimaryButtonStyled>
  )
}
const PrimaryButtonStyled = styled.button`

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

  
`;
