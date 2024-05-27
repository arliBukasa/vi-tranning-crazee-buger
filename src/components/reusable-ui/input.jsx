import { theme } from "../../theme";
import styled from "styled-components";

export default function Input({value,onChange,Icon, ...restprops}) {
  return (
    <InputStyled>
      {Icon && Icon}
      <input
        value={value}
        onChange={onChange}
        type="text"
        id=""
        {...restprops}
      />
    </InputStyled>
  )
}

const InputStyled = styled.div`
 border-radius:5px;
    background:${theme.colors.white};
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
    width:100%;
    &::placeholder{
      color:${theme.colors.greyLight};
    }
    }
  
`;
