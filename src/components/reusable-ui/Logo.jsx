import React from 'react'
import styled from 'styled-components';
import { theme } from '../../theme';
function Logo() {
  return (
    <Logostyled>
        <h1>Crazy Burger</h1>

    </Logostyled>
  )
}
const Logostyled = styled.div`
  background: ${theme.colors.blue};
  color:${theme.colors.primary}
`;
export default Logo