import React from 'react'
import styled from 'styled-components'
import { theme } from '../theme'

const InputStyled = styled.label`
  display: grid;
  grid-gap: 5px;
  font-weight: 600;

  .inputText {
    border-radius: 20px;
    padding: 10.5px 21px;
    border: 1px solid ${theme.colors.secundaryLight};
  }

  &.labelError {
    color: ${theme.colors.error};
  }

  .inputError {
    border: 1px solid ${theme.colors.error};
  }
`

const Input = ({ id, className, label, error, touched, ...rest }) => {
  return (
    <InputStyled
      className={`${className} ${touched && error && 'labelError'}`}
      htmlFor={id}>
      {label} {error && touched && `- ${error}`}
      <input
        id={id}
        className={`inputText ${touched && error && 'inputError'}`}
        {...rest} />
    </InputStyled>
  )
}

export default Input
