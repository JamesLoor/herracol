import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import { theme } from '../theme'

const ValueStyled = styled.div`
  .value__title {
    font-size: 18px;
    margin-bottom: 10px;
  }
`

const Value = ({ icon, title, text }) => {
  return (
    <ValueStyled>
      {icon && <Icon icon={icon} width="30" height="30" color={theme.colors.black} />}
      <h3 className="value__title">{title}</h3>
      <p className="value__text">{text}</p>
    </ValueStyled>
  )
}

export default Value
