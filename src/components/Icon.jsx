import React from 'react'
import { IconsPath } from '../iconsPath'
import styled from 'styled-components'

const SvgStyled = styled.svg`
  display: flex;
  justify-self: center;
  align-self: center;
`

const Icon = ({ icon, width, height, color, className }) => {
  return (
    <SvgStyled
      className={className}
      width={`${width}`}
      height={`${height}`}
      viewBox={`0 0 30 30`}
    >
      <path fill={color} d={IconsPath[icon]}/>
    </SvgStyled>
  )
}

export default Icon