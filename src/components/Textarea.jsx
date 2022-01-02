import React from 'react'
import styled from 'styled-components'
import { theme } from '../theme'

const TextareaStyled = styled.label`
  display: grid;
  grid-gap: 5px;
  font-weight: 600;

  .textarea {
    border-radius: 20px;
    padding: 10.5px 21px;
    border: 1px solid ${theme.colors.secundaryLight};
    resize: none;
  }

  &.labelError {
    color: ${theme.colors.error};
  }

  .textareaError {
    border: 1px solid ${theme.colors.error};
  }
`

const Textarea = ({ label, className, error, touched, ...rest }) => {
  return (
    <TextareaStyled
      className={`${className} ${error && touched && 'labelError'}`}
      htmlFor={label}>
      {label} {error && touched && `- ${error}`}
      <textarea
        className={`textarea ${error && touched && 'textareaError'}`}
        {...rest}>
      </textarea>
    </TextareaStyled>
  )
}

export default Textarea
