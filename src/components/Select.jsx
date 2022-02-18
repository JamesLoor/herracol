import React from 'react'
import styled from 'styled-components'
import { theme } from '../theme'

const SelectStyled = styled.div`
  display: grid;
  grid-gap: 5px;
  font-weight: 600;

  .select {
    border-radius: 20px;
    padding: 10.5px 21px;
    border: 1px solid ${theme.colors.secundaryLight};
  }

  &.labelError {
    color: ${theme.colors.error};
  }

  .selectError {
    border: 1px solid ${theme.colors.error};
  }
`

const Select = ({ id, className, options, label, error, touched, ...rest }) => {
  return (
    <SelectStyled
      className={`${className} ${touched && error && 'labelError'}`}
      htmlFor={id}
    >
      {label} {error && touched && `- ${error}`}
      <select
        id={id}
        className={`select ${touched && error && 'inputError'}`}
        {...rest}
      >
        {options.map(({ id, name, type }) => {
          if(name !== "All") {
            return (
              <option key={id} id={id} value={type ? type : name}>{name}</option>
            )
          }
          return null
        })}
      </select>
    </SelectStyled>
  )
}

export default Select
