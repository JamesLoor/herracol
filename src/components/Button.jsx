import React from 'react'
import styled from 'styled-components'
import { theme } from '../theme'

const ButtonStyled = styled.button`
  border-radius: 20px;
  padding: 10.5px 21px;
  text-align: center;
  background-color: ${theme.colors.accent};
  color: ${theme.colors.black};
  font-weight: 600;
`

const Button = ({ onClick, children, ...rest }) => {
  return (
    <ButtonStyled onClick={onClick} {...rest}>
      {children}
    </ButtonStyled>
  )
}

export default Button
