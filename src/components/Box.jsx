import React from 'react'
import styled from 'styled-components'
import { theme } from '../theme'

const BoxStyled = styled.div`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  display: grid;
  gap: 20px;
`

const Box = ({ children }) => {
  return (
    <BoxStyled>
      {children}
    </BoxStyled>
  )
}

export default Box
