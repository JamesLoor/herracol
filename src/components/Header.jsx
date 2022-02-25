import React from 'react'
import styled from 'styled-components'
import { Wrapper } from '../globalStyles'
import { theme } from '../theme'
import LogoSvgShort from '../assets/logoHerracolSA.png'

import Menu from './Menu'
import Link from './Link'

const HeaderStyled = styled.div`
  width: 100%;
  position: fixed;
  display: grid;
  align-items: center;
  min-height: 69px;
  z-index: ${theme.positions.header};
  background: ${theme.colors.primary};
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.13);

  .header__container {
    display: grid;
    grid-template-columns: min-content min-content;
    justify-content: space-between;
    align-items: center;
  }

  .logo img {
    width: 225px
  }
`

const Header = () => {
  return (
    <HeaderStyled>
      <Wrapper>
        <div className="header__container">
        <Link to="/">
          <figure className="logo">
            <img src={LogoSvgShort} alt="Logo Herracol S.A" />
          </figure>
        </Link>

          <Menu />
        </div>
      </Wrapper>
    </HeaderStyled>
  )
}

export default Header
