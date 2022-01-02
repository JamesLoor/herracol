import React from 'react'
import styled from 'styled-components'
import { Wrapper } from '../globalStyles'
import { theme } from '../theme'

import Menu from './Menu'

const HeaderStyled = styled.div`
  width: 100%;
  position: fixed;
  display: grid;
  align-items: center;
  min-height: 69px;
  background-color: ${theme.colors.secundaryDark};
  z-index: ${theme.positions.header};
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.13);

  .header__container {
    display: grid;
    grid-template-columns: min-content min-content;
    justify-content: space-between;
    align-items: center;
  }

  .logo span {
    font-size: 30px;
    font-weight: bold;
    color: ${theme.colors.white};
  }
`

const Header = () => {
  return (
    <HeaderStyled>
      <Wrapper>
        <div className="header__container">
          <div className="logo">
            <span>Herracol</span>
          </div>

          <Menu />
        </div>
      </Wrapper>
    </HeaderStyled>
  )
}

export default Header
