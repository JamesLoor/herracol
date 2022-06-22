import React from 'react'
import { IconsPath } from '../iconsPath'
import styled from 'styled-components'

const SvgStyled = styled.svg`
  display: flex;
  justify-self: center;
  align-self: center;
`

const Icon = ({ icon, width, height, color, className, stroke }) => {
  return (
    <SvgStyled
      className={className}
      width={`${width}`}
      height={`${height}`}
      viewBox={`0 0 30 30`}
    >
      <path fill={color} d={IconsPath[icon]} stroke={stroke && color} fillRule="evenodd" clipRule="evenodd"/>
    </SvgStyled>
  )
}

export default Icon