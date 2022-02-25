import React from 'react'
import styled from 'styled-components'
import { theme } from '../theme'

const SelectStyled = styled.label`
  display: grid;
  grid-gap: 5px;
  font-weight: 600;

  .select {
    width: 100%;
    border-radius: 20px;
    padding: 10.5px 21px;
    border: 1px solid ${theme.colors.secundaryLight};
    outline: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    display: inline-block;
    background: #3A4176;
    border: none;
    outline: none;
    color: ${theme.colors.white};

    option {
      background: #FFFFFF33;
      user-select: none;
      :focus {
        background: #FFFFFF33;
      }
    }
  }

  .select::-ms-expand {
    display: none;
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
          return (
            <option key={id} id={id} value={type ? type : name}>{name}</option>
          )
        })}
      </select>
    </SelectStyled>
  )
}

export default Select
