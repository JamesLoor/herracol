import React from 'react'
import styled from 'styled-components'
import { theme } from '../theme'

const BoxStyled = styled.div`
  background-color: ${theme.colors.white};
  box-shadow: 0px 0px 8px 0px #00000040;
  color: ${theme.colors.black};
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  display: grid;
  gap: 20px;
`

const Box = ({ children, className }) => {
  return (
    <BoxStyled className={className}>
      {children}
    </BoxStyled>
  )
}

export default Box
